import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement!: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color(value:string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessage()
  }

  constructor( private el: ElementRef<HTMLElement>) {
    /* console.log(el); */
    this.htmlElement = el;

    /* this.htmlElement.nativeElement.innerHTML = "Algo de información"; */
  }

  ngOnInit(): void {
    console.log('ng OnInit')
  }

  setStyle():void {
    if( !this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color
  };

  setErrorMessage():void {
    console.log(this._errors)
    if ( !this.htmlElement) return;
    if ( !this._errors) {
      this.htmlElement.nativeElement.innerHTML = "";
      return;
    }
    const errors = Object.keys(this._errors);

    if(errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = "Este campo es requerido.";
    }

    if(errors.includes('minlength')) {
      this.htmlElement.nativeElement.innerHTML = 'Necesita ' + this._errors['minlength']?.requiredLength + ' caracteres como minímo. Actualmente tienes ' + this._errors['minlength']?.actualLength;
      return;
    }

    if(errors.includes('email')) {
      this.htmlElement.nativeElement.innerHTML = "Necesita un formato de email valido";
      return;
    }
  }

}

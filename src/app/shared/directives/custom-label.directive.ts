import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement!: ElementRef<HTMLElement>;

  constructor( private el: ElementRef<HTMLElement>) {
    console.log(el);
    this.htmlElement = el;

    this.htmlElement.nativeElement.innerHTML = "Algo de información";
  }

  ngOnInit(): void {
    console.log('ng OnInit')
  }

}

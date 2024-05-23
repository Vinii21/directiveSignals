import { Component, Inject, OnInit, computed, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-pages.component.html',
  styleUrl: './user-info-pages.component.css',
})
export class UserInfoPagesComponent implements OnInit {

  /* private usersService = Inject(UserServiceService); */
  constructor(private userService: UserServiceService) {}

  public userId = signal(1);
  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);

  public full_name = computed<string>(()=>{
    if(!this.userWasFound) return 'Usuario no encontrado';
    return `${this.currentUser()?.first_name} ${this.currentUser()?.last_name}`;
  })

  ngOnInit(): void {
    this.loadUser( this.userId() )
  }

  loadUser (id: number) {
    if(id <= 0) return;
    this.userId.set(id);
    this.currentUser.set(undefined);

    this.userService.getUserById(id)
      .subscribe({
        next: (user) => {
          this.currentUser.set(user);
          this.userWasFound.set(true)
        },
        error: () => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        }
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'introPruebasUnitarias';
  _toEqual = "rojas"
  _toContain = "private loadingController: LoadingController junior rojas"
  users: any;

  constructor(private _users: UserService) { }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this._users.getUserList()
      .subscribe((user) => {
        this.users = user
        console.log('this.users', this.users)
      })
  }

  par(num: number): boolean {
    return num % 2 === 0 ? true : false
  }
}

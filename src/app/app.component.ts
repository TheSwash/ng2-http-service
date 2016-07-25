import { Component } from '@angular/core';
import { UserService } from './user.service'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'app works!';
  users: Array<any>;

  constructor(private _user: UserService) {
    _user.getuser()
      .subscribe(users => this.users = users);
  }
}

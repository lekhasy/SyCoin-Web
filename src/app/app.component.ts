import { Component } from '@angular/core';
import { AccountService } from './account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SyCoin-Web';

  constructor(private accountService: AccountService, private router: Router) { }


  handleLogout(): void {
    this.accountService.LogoutUser();
    this.router.navigate(['/']);
  }
}

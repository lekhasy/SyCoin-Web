import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../account/account.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    if (!this.accountService.IsUserLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  handleLogout(): void {
    this.accountService.LogoutUser();
    this.router.navigate(['/login']);
  }

}

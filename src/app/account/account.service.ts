import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  IsUserLoggedIn(): boolean {
    return localStorage.getItem('pubKey') && localStorage.getItem('pubKey') .length !== 0;
  }

  LoginUser(publicKey: string): void {
    localStorage.setItem('pubKey', publicKey);
  }

  LogoutUser(): void {
    localStorage.clear();
  }

}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  handleUploadButtonClicked() {
    document.getElementById('fileInput').click();
  }

  handleFileChanged(files: File[]) {
    const reader = new FileReader();
    reader.readAsText(files[0]);
    const me = this;
    reader.onload = function () {
      me.accountService.LoginUser(reader.result.toString());
      me.router.navigate(['/wallet']);
    };
  }

}

import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html'
})

export class LoginComponent {

  doLogin() {
    const url = 'https://account.xiaomi.com/oauth2/authorize' +
      '?client_id=2882303761517745716' +
      '&redirect_uri=http://tinyhap.com/oauth2/xiaomi' +
      '&response_type=code';

    window.open(url);
  }
}

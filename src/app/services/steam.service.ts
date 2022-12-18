import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { SteamAccount } from '../models/steam.account';

@Injectable({
  providedIn: 'root'
})
export class SteamService {
  baseUrl: string = env.auth.serverUrl + 'api/steamaccount';
  accounts: SteamAccount[] = new Array<SteamAccount>();

  constructor(private http: HttpClient, private auth: AuthService) { }

  setAuthToken(): void {
    this.auth.getAccessTokenSilently().subscribe((token) => {
      sessionStorage.setItem('token', token);
    });
  }

  getSteamAccounts(): SteamAccount[] {
    // get token from auth0
    let token = sessionStorage.getItem('token');
    while(!token) {
      this.setAuthToken();
      token = sessionStorage.getItem('token');
    }

    // use token for authorization
    const headers: any = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const options = {
      headers: headers
    }
    this.http.get<SteamAccount[]>(this.baseUrl, options).subscribe((accounts: SteamAccount[]) => {
      if (accounts instanceof Array<SteamAccount>) {
        this.accounts = accounts;
      }
    });
    
    return this.accounts;
  }
}

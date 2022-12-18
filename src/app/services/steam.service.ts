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

  getSteamAccounts(): Observable<SteamAccount[]> {
    return this.http.get<SteamAccount[]>(this.baseUrl);
  }
}

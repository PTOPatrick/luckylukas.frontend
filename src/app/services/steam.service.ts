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

  addSteamAccount(): void {
    var headers: any = { 
      'content-type': 'application/json'
    }  
    var account: any = {
      "AccountName": this.makeid(10), 
      "Name": this.makeid(8), 
      "CsRank": "silver 1", 
      "Owner": "lukas", 
      "Created": new Date(), 
      "Changed": new Date(), 
      "IsBanned": false
    };
    this.http.post<any>(this.baseUrl, JSON.stringify(account), { 'headers': headers }).subscribe({
      next(bla) {
        console.log(bla);        
      },
      error(msg) {
        console.log(msg);        
      }
    });
  }

  makeid(length: number): string {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
}

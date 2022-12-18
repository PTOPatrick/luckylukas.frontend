import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SteamService {
  baseUrl: string = env.auth.serverUrl + 'api/steamaccount';
  
  constructor(private http: HttpClient) { }

  getSteamAccounts(): void {
    this.http.get(this.baseUrl, { responseType: 'text' }).subscribe({
      next(accounts) {
        console.log(accounts)
      },
      error(msg) {
        console.log(msg)
      }
    });
  }
}

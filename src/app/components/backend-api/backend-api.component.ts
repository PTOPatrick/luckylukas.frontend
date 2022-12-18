import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SteamAccount } from 'src/app/models/steam.account';
import { SteamService } from 'src/app/services/steam.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-backend-api',
  templateUrl: './backend-api.component.html',
  styleUrls: ['./backend-api.component.css']
})
export class BackendApiComponent implements OnInit {
  accounts: SteamAccount[] = new Array<SteamAccount>();
  
  constructor(private http: HttpClient, private steamService: SteamService) { }

  ngOnInit(): void {
    this.accounts = this.steamService.getSteamAccounts();
  }

  getAccounts(): void {
    this.accounts = this.steamService.getSteamAccounts();
  }
}

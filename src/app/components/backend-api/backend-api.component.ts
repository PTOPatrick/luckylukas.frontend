import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SteamAccount } from 'src/app/models/steam.account';
import { SteamService } from 'src/app/services/steam.service';

@Component({
  selector: 'app-backend-api',
  templateUrl: './backend-api.component.html',
  styleUrls: ['./backend-api.component.css']
})
export class BackendApiComponent implements OnInit {
  accounts: SteamAccount[] = [];
  
  constructor(private http: HttpClient, private steamService: SteamService) { }

  ngOnInit(): void { 
    this.steamService.getSteamAccounts().subscribe((accounts: SteamAccount[]) => {
      this.accounts = accounts;
    });
  }

  getAccounts(): void {
    this.steamService.getSteamAccounts().subscribe((accounts: SteamAccount[]) => {
      this.accounts = accounts;
    });
  }

  addSteamAccount(): void {
    this.steamService.addSteamAccount();
  }
}

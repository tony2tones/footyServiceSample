import { Component } from "@angular/core";
import { FootyService } from "./footy.service";
import { ResponseLeague } from './interface';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "servicesFooty";
  storedData:ResponseLeague;
  constructor(private footy: FootyService) {}

  clicker() {
    this.footy.getLeagueStand().subscribe(data => {
      this.storedData = data[0].country_name;
      console.log('my response', this.storedData);
      console.log('from data response', data[0]);
    });
  }
}

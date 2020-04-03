import { Component } from "@angular/core";
import { FootyService } from "./footy.service";
import { ResponseLeague, League } from './interface';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "servicesFooty";
  storedData:League;
  constructor(private footy: FootyService) {}

  clicker() {
    this.footy.getLeagueStand().subscribe((data:ResponseLeague) => {
      this.storedData = data[0];
      console.log('my response', this.storedData);
      console.log('from data response', data);
    });
  }
}

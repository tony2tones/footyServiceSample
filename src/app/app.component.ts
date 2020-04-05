import { Component } from "@angular/core";
import { FootyService } from "./footy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "servicesFooty";
  teamName:string
  position:string
  gamesPlayed:string
  wins:string
  // constructor imports footy service...the footy can 
  // be named into anything by the way.
  constructor(private footy: FootyService) {}

  clicker() {
    // Use that footy service and call the functon to 
    // return a value that you can subscribe to
    this.footy.getLeagueStand().subscribe(data => {
      this.teamName = data[0].team_name;
      this.position = data[0].overall_league_position;
      this.gamesPlayed = data[0].overall_league_payed;
      this.wins = data[0].overall_league_W;

      console.log('from data response', data);
    });
  }
}

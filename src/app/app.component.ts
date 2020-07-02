import { Component } from "@angular/core";
import { FootyService } from "./footy.service";

// MOCK DATA
const teamData = 
  {
    teamName: "Liverpool",
    position: "1",
    gamesPlayed: "loads",
    wins: "28",
    draws: "2",
    loses: "3",
  };


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "servicesFooty";
  teamName: string;
  position: string;
  gamesPlayed: string;
  wins: string;

  // constructor imports footy service...the footy can
  // be named into anything by the way.
  constructor(private footy: FootyService) {}

  clicker() {
    // Use that footy service and call the functon to
    // return a value that you can subscribe to
    // this.footy.getLeagueStand().subscribe((data) => {
      this.teamName = teamData.teamName;
      this.position = teamData.position;
      this.gamesPlayed = teamData.gamesPlayed;
      this.wins = teamData.wins;

      console.log("from data response", teamData);
    // });
  }
}

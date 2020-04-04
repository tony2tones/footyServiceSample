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
  teamName:string
  position:string
  gamesPlayed:string
  wins:string
  constructor(private footy: FootyService) {}

  clicker() {
    this.footy.getLeagueStand().subscribe(data => {
      this.teamName = data[0].team_name;
      this.position = data[0].overall_league_position;
      this.gamesPlayed = data[0].overall_league_payed;
      this.wins = data[0].overall_league_W;

      console.log('my response', this.teamName);
      console.log('from data response', data);
    });
  }
}

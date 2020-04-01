import { Component } from "@angular/core";
import { FootyService } from "./footy.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "servicesFooty";
  constructor(private footy: FootyService) {}

  clicker() {
    this.footy.getLeagueStand().subscribe(data => {
      console.log(data);
    });
  }
}

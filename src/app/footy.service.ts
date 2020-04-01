import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FootyService {
  apiKey = "1a1a8efa50b6a6f8f1eca1628b95240ec7c2c905934740a5780f4b051195c555";
  url =
    "https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=";

  constructor(private http: HttpClient) {}

  getLeagueStand() {
    return this.http.get(this.url + this.apiKey);
  }
}

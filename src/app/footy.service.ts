import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FootyService {
  // place your apikey below
  apiKey = "APIKEY_IN_HERE_GUYS";
  // you can keep all your constants in variables to make the url calls
  // easier to manage
  url =
    "https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=";

  constructor(private http: HttpClient) {}

  getLeagueStand() {
    return this.http.get(this.url + this.apiKey);
  }
}

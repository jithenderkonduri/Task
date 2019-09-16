// adunit.service.ts

import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Users } from "./users";
import { APP_CONFIG, IAppConfig } from "../../config";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig
  ) {}

  getUser(): Observable<any> {
    return this.http.get(`${this.config.apiUrl}/users`);
  }
}

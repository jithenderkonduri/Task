import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  uri = "http://localhost:8887/dashboard";

  constructor(private http: HttpClient) {}
}

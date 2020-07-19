import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, take } from "rxjs/operators";
import { of, Observable } from "rxjs";
import { Login } from "../models/login";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(): Observable<Login> {
    return this.http.get("/assets/auth.json").pipe(
      map((data: Login) => {
        console.log(data, typeof data);
        return data;
      })
    );
  }
}

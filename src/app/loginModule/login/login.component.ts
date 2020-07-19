import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { LoginService } from "src/app/shared/login.service";
import { Login } from "src/app/models/login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("input", { static: false }) InputRef: ElementRef;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit(name: HTMLInputElement, password: HTMLInputElement) {
    console.log("name", name.value);
    this.loginService.login().subscribe(
      (v: Login) => {
        if (v) {
          if (v.username === name.value && v.password === password.value) {
            alert("sucess");
            this.router.navigate(["/home"]);
          } else {
            alert("wrong credentials");
          }
        }
      },
      error => {
        console.log("e", error);
      }
    );
  }
}

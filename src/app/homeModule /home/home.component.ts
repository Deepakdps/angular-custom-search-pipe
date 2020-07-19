import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/shared/home.service";
import { User } from "src/app/models/user";
import { restructure } from "../../utils";
import { take } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  users: any[] = [];
  isLoading: boolean = false;

  constructor(private homeService: HomeService) {
    this.getUsers();
  }

  ngOnInit() {}

  getUsers() {
    this.isLoading = true;
    this.homeService
      .getUsers()
      .pipe(take(1))
      .subscribe(
        (v: any) => {
          if (v.results && v.results.length > 0) {
            let itemsArray: User[] = [];
            itemsArray = v.results.map(obj => obj.user);
            localStorage.setItem("items", JSON.stringify(itemsArray));
            const data = JSON.parse(localStorage.getItem("items"));
            this.users = data;
            this.isLoading = false;
            //   console.log("req users", this.users);
          }
        },
        error => {
          this.isLoading = false;
        }
      );
  }

  addUser(args: any) {
    const obj_to_save: User = restructure(args);
    console.log("object args", obj_to_save);
    this.users.push(obj_to_save);
    localStorage.setItem("items", JSON.stringify(this.users));
    alert("added sucessfully ");
  }
}

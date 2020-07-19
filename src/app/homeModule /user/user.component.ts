import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { User } from "src/app/models/user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Output()
  add: EventEmitter<any> = new EventEmitter<any>();
  userForm: FormGroup;
  genders: string[] = ["male", "female"];
  constructor(private formBuilder: FormBuilder) {
    this.setForm();
  }

  ngOnInit() {}

  setForm() {
    this.userForm = this.formBuilder.group({
      gender: ["", Validators.required],
      title: ["", Validators.required],
      first: ["", Validators.required],
      last: ["", [Validators.required]],
      password: ["", [Validators.required]],
      dob: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      username: ["", Validators.required]
    });
  }

  // export interface User {
  //   gender: string;
  //   name: Name;
  //   email: string;
  //   username: string;
  //   password: string;
  //   dob: string;
  //   phone: string;
  //   cell?: string;
  // }

  // export interface Name {
  //   title: string;
  //   first: string;
  //   last: string;
  // }

  onSubmit() {
    if (this.userForm.valid) {
      console.log("form", this.userForm.value);
      this.add.emit(this.userForm.value);
      this.userForm.reset();
    } else {
      alert("all fields are required");
    }
  }
}

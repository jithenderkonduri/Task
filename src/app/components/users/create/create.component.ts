import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../users.service";

@Component({
  selector: "app-user",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class UserCreateComponent implements OnInit {
  angForm: FormGroup;
  msg: string = null;
  showMsg: boolean = false;
  constructor(private UserService: UserService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required]
    });
  }

  ngOnInit() {}
}

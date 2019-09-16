import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularFontAwesomeModule } from "angular-font-awesome";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { HttpClientModule } from "@angular/common/http";
import { UserModule } from "./components/users/user.module";
import { ShellModule } from "./shell/shell.module";
import { AppRoutingModule } from "../app-routing.module";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    ShellModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

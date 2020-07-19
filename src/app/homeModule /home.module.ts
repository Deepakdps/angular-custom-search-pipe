import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { routes } from "./home.routing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserComponent } from "./user/user.component";
import { FilterPipe } from "../utils/filter.pipe";

@NgModule({
  declarations: [HomeComponent, UserComponent, FilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule {}

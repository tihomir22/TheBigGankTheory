import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { RxjsOnFireRoutingModule } from "./rxjs-on-fire-routing.module";
import {
  MatSliderModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from "@angular/material";
import { TheBigGankComponent } from "./comp/the-big-gank/the-big-gank.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [TheBigGankComponent],
  imports: [
    CommonModule,
    MatListModule,
    RxjsOnFireRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot()
  ]
})
export class RxjsOnFireModule {}

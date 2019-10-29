import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WebpackCompsRoutingModule } from "./webpack-comps-routing.module";
import { SearchersComponent } from "./searchers/searchers.component";
import { BestCustomCardComponent } from "./best-custom-card/best-custom-card.component";
import {
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LazyLoadImageModule, scrollPreset } from "ng-lazyload-image";
import { HeaderCompComponent } from "./header-comp/header-comp.component";
import { BodyCompComponent } from "./body-comp/body-comp.component";
import { AccionesCustomCompComponent } from "./acciones-custom-comp/acciones-custom-comp.component";

@NgModule({
  declarations: [
    SearchersComponent,
    BestCustomCardComponent,
    HeaderCompComponent,
    BodyCompComponent,
    AccionesCustomCompComponent
  ],
  imports: [
    CommonModule,
    WebpackCompsRoutingModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  exports: [SearchersComponent, BestCustomCardComponent, MatButtonModule, MatChipsModule]
})
export class WebpackCompsModule {}

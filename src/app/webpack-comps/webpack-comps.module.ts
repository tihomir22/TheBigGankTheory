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
  MatButtonModule
} from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LazyLoadImageModule, scrollPreset } from "ng-lazyload-image";

@NgModule({
  declarations: [SearchersComponent, BestCustomCardComponent],
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
    LazyLoadImageModule.forRoot({
      preset: scrollPreset
    })
  ],
  exports: [SearchersComponent, BestCustomCardComponent]
})
export class WebpackCompsModule {}

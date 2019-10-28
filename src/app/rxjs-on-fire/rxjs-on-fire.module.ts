import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RxjsOnFireRoutingModule } from "./rxjs-on-fire-routing.module";
import { TheBigGankComponent } from "./comp/the-big-gank/the-big-gank.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
import { WebpackCompsModule } from "../webpack-comps/webpack-comps.module";

@NgModule({
  declarations: [TheBigGankComponent],
  imports: [
    CommonModule,
    RxjsOnFireRoutingModule,
    SlimLoadingBarModule.forRoot(),
    WebpackCompsModule
  ]
})
export class RxjsOnFireModule {}

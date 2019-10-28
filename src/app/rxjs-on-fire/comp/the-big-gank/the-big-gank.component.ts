import { Component, OnInit } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

@Component({
  selector: "app-the-big-gank",
  templateUrl: "./the-big-gank.component.html",
  styleUrls: ["./the-big-gank.component.scss"]
})
export class TheBigGankComponent implements OnInit {
  //WuvGIBuwjNy1OVOvZeyH1yzysvjdqgGKjnK3nHUh

  constructor(private slimLoadingBarService: SlimLoadingBarService) {}

  ngOnInit() {
    this.slimLoadingBarService.start(() => {});
    this.slimLoadingBarService.progress = 70;
  }
  public cargaTerminada(): void {
    this.slimLoadingBarService.complete();
  }
}

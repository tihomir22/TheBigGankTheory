import { Component, OnInit, Input } from "@angular/core";
import { RoverDiscovery } from "../best-custom-card/best-custom-card.component";

@Component({
  selector: "app-body-comp",
  templateUrl: "./body-comp.component.html",
  styleUrls: ["./body-comp.component.scss"]
})
export class BodyCompComponent implements OnInit {
  @Input("roverDiscovery")
  set roverDiscovery(discovery: RoverDiscovery) {
    if (discovery) {
      this._discovery = discovery;
    }
  }

  public objKeys = Object.keys;
  public _discovery: RoverDiscovery;
  constructor() {}

  ngOnInit() {}

  public esArray(obj: any) {
   return obj instanceof Array ? true : false;
  }
}

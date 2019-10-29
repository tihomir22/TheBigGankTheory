import { Component, OnInit, Input } from "@angular/core";
import { RoverDiscovery } from "../best-custom-card/best-custom-card.component";

@Component({
  selector: "app-header-comp",
  templateUrl: "./header-comp.component.html",
  styleUrls: ["./header-comp.component.scss"]
})
export class HeaderCompComponent implements OnInit {
  @Input("roverDiscovery")
  set roverDiscovery(discovery: RoverDiscovery) {
    if (discovery) {
      this._discovery = discovery;
    }
  }

  public _discovery: RoverDiscovery;

  constructor() {}

  ngOnInit() {}
}

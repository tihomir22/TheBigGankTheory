import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { RoverDiscovery } from "../best-custom-card/best-custom-card.component";

@Component({
  selector: "app-acciones-custom-comp",
  templateUrl: "./acciones-custom-comp.component.html",
  styleUrls: ["./acciones-custom-comp.component.scss"]
})
export class AccionesCustomCompComponent implements OnInit {
  @Input("roverDiscovery")
  set roverDiscovery(discovery: RoverDiscovery) {
    if (discovery) {
      this._discovery = discovery;
    }
  }
  @Output() abreteSesamo = new EventEmitter();

  public _discovery: RoverDiscovery;

  constructor() {}

  ngOnInit() {}

  public showMeDaWae(codigo: any) {
    this.abreteSesamo.emit(codigo);
  }
}

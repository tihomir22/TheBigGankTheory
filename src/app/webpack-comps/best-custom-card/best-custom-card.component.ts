import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

export interface PhotosNASA {
  photos: Array<RoverDiscovery>;
}

export interface RoverDiscovery {
  camera: any;
  earth_data: Date;
  id: number;
  img_src: string;
  rover: any;
  sol: number;
  showingCamera?: boolean;
  showingRover?: boolean;
}

@Component({
  selector: "app-best-custom-card",
  templateUrl: "./best-custom-card.component.html",
  styleUrls: ["./best-custom-card.component.scss"]
})
export class BestCustomCardComponent implements OnInit {
  public _discovery: RoverDiscovery;

  @Input("roverDiscovery")
  set roverDiscovery(discovery: RoverDiscovery) {
    if (discovery) {
      this._discovery = discovery;
    }
  }

  constructor() {}

  public abreteSesamo(codigo: any) {
    // se podria haber realizado este seteo perfectamente en "acciones-custom-comp"
    // ya que este tambien tiene el puntero a _discovery, pero para verlo mejor lo hacemos
    // con un output
    if (codigo == "0") {
      this._discovery.showingRover =  !this._discovery.showingRover;
    } else if (codigo == "1") {
      this._discovery.showingCamera =  !this._discovery.showingCamera;
    }
  }

  ngOnInit() {}
}

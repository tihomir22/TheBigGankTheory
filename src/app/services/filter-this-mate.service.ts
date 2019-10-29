import { Injectable } from "@angular/core";
import { RoverDiscovery } from "../webpack-comps/best-custom-card/best-custom-card.component";


@Injectable({
  providedIn: "root"
})
export class FilterThisMateService {
  private arrayClonado: Array<RoverDiscovery> = [];
  private arrayHot: Array<RoverDiscovery> = [];


  constructor() {}

  public setRoverDiscoveries(data: Array<RoverDiscovery>) {
    this.arrayClonado = this.arrayClonado.concat([...data]);
    this.arrayHot = this.arrayHot.concat(data);
  }

  public setLiveDiscoveries(array: Array<RoverDiscovery>) {
    this.arrayHot = array;
  }

  public getLiveDiscoveries(): Array<RoverDiscovery> {
    return this.arrayHot;
  }

  public getBlockedDiscoveries(): Array<RoverDiscovery> {
    return this.arrayClonado;
  }
}

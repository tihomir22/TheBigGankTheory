import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FilterThisMateService } from "src/app/services/filter-this-mate.service";

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
}

@Component({
  selector: "app-best-custom-card",
  templateUrl: "./best-custom-card.component.html",
  styleUrls: ["./best-custom-card.component.scss"]
})
export class BestCustomCardComponent implements OnInit {
  public objKeys = Object.keys;

  @Output() cargaTerminada = new EventEmitter();

  constructor(
    private http: HttpClient,
    public filterService: FilterThisMateService
  ) {}

  public showMeDaWae(item: any) {
    item.showingCamera = !item.showingCamera;
  }

  public esArray(loQueSea: any): boolean {
    if (loQueSea instanceof Array) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.http
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=WuvGIBuwjNy1OVOvZeyH1yzysvjdqgGKjnK3nHUh"
      )
      .subscribe((data: PhotosNASA) => {
        this.cargaTerminada.emit();
        this.filterService.setRoverDiscoveries(data.photos);
      });
  }
}

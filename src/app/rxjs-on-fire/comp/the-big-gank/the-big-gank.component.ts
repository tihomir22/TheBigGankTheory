import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";

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
  selector: "app-the-big-gank",
  templateUrl: "./the-big-gank.component.html",
  styleUrls: ["./the-big-gank.component.scss"]
})
export class TheBigGankComponent implements OnInit {
  //WuvGIBuwjNy1OVOvZeyH1yzysvjdqgGKjnK3nHUh
  public roverDiscoveries: Array<RoverDiscovery> = [];
  public objKeys = Object.keys;
  constructor(
    private http: HttpClient,
    private slimLoadingBarService: SlimLoadingBarService
  ) {}

  ngOnInit() {
    this.slimLoadingBarService.start(() => {});
    this.slimLoadingBarService.progress = 70;
    this.http
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=WuvGIBuwjNy1OVOvZeyH1yzysvjdqgGKjnK3nHUh"
      )
      .subscribe((data: PhotosNASA) => {
        console.log(data.photos[0]);
        this.slimLoadingBarService.complete();
        this.roverDiscoveries = data.photos;
      });
  }
}

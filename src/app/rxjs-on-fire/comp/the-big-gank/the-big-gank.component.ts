import { Component, OnInit } from "@angular/core";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { HttpClient } from "@angular/common/http";
import { PhotosNASA } from "src/app/webpack-comps/best-custom-card/best-custom-card.component";
import { FilterThisMateService } from "src/app/services/filter-this-mate.service";
import { Observable, interval, Subscription } from "rxjs";
import { map, concatAll } from "rxjs/operators";
@Component({
  selector: "app-the-big-gank",
  templateUrl: "./the-big-gank.component.html",
  styleUrls: ["./the-big-gank.component.scss"]
})
export class TheBigGankComponent implements OnInit {
  public interval$: Observable<any>;
  public combination$: Observable<any>;
  public suscription$: Subscription;
  public estadoCargaDatos: boolean = false;
  public paginaActual: number = 1;

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private http: HttpClient,
    public filterService: FilterThisMateService
  ) {
    this.slimLoadingBarService.start(() => {});
    this.slimLoadingBarService.progress = 70;

    this.combination$ = this.http.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=WuvGIBuwjNy1OVOvZeyH1yzysvjdqgGKjnK3nHUh"
    );
    this.suscription$ = this.combination$.subscribe((data: PhotosNASA) => {
      this.filterService.setRoverDiscoveries(data.photos);
      this.slimLoadingBarService.complete();
    });
  }

  ngOnInit() {}

  public activarCargaDeNuevosDatos(): void {
    if (this.suscription$) {
      this.suscription$.unsubscribe();
    }
    this.interval$ = interval(5000);
    this.combination$ = this.interval$.pipe(
      map(val =>
        this.http.get(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=" +
            (val + 1) +
            "&api_key=WuvGIBuwjNy1OVOvZeyH1yzysvjdqgGKjnK3nHUh"
        )
      ),
      concatAll()
    );
    this.suscription$ = this.combination$.subscribe((data: any) => {
      if (!data.error) {
        this.paginaActual++;
        this.filterService.setRoverDiscoveries(data.photos);
        this.slimLoadingBarService.complete();
      } else {
        this.suscription$.unsubscribe();
      }
    });
  }
}

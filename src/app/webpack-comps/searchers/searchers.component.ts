import { Component, OnInit } from "@angular/core";
import { FilterThisMateService } from "src/app/services/filter-this-mate.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { of } from "rxjs";

@Component({
  selector: "app-searchers",
  templateUrl: "./searchers.component.html",
  styleUrls: ["./searchers.component.scss"]
})
export class SearchersComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(private filterService: FilterThisMateService, private formBodyBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBodyBuilder.group({
      filtrajeOldSchool: ["", [Validators.required]],
      filtrajeReactivo: ["", [Validators.required]]
    });
    this.formGroup.get("filtrajeOldSchool").valueChanges.subscribe(data => {
      this.filterItOooooooldSchool(data);
    });
    this.formGroup.get("filtrajeReactivo").valueChanges.subscribe(data => {
      this.newSchoolRules(data);
    });
  }

  public filterItOooooooldSchool(searchTerm: string) {
    let res = this.filterService.getBlockedDiscoveries().filter(discovery => (discovery.id + "").includes(searchTerm));
    this.filterService.setLiveDiscoveries(res);
  }

  public newSchoolRules(searchTerm: string) {
    of(
      this.filterService
        .getBlockedDiscoveries()
        .map(discovery => ({ ...discovery, earth_date: new Date() }))
        .filter(discorery => (discorery.id + "").includes(searchTerm))
    ).subscribe(data => {
      this.filterService.setLiveDiscoveries(data);
    });
  }
}

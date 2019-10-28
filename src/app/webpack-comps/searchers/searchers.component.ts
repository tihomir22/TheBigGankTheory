import { Component, OnInit } from "@angular/core";
import { FilterThisMateService } from "src/app/services/filter-this-mate.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-searchers",
  templateUrl: "./searchers.component.html",
  styleUrls: ["./searchers.component.scss"]
})
export class SearchersComponent implements OnInit {
  public formGroup: FormGroup;

  constructor(
    private filterService: FilterThisMateService,
    private formBodyBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formGroup = this.formBodyBuilder.group({
      filtrajeOldSchool: ["", [Validators.required]],
      filtrajeAsincrono: ["", [Validators.required]]
    });
    this.formGroup.get("filtrajeOldSchool").valueChanges.subscribe(data => {
      console.log(data);
      this.filterItOooooooldSchool(data);
    });
  }

  public filterItOooooooldSchool(searchTerm) {
    console.log(
      this.filterService
        .getBlockedDiscoveries()
        .filter(item =>
          Object.keys(item).some(k =>
            item[k] instanceof Number
              ? item[k] + ""
              : item[k].includes(searchTerm)
          )
        )
    );
  }
}

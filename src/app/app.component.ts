import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tooltip App";
  stateTooltip = false;
  viewTooltip = false;
  tooltip_Id: string;
  tt_text: string;

  @HostListener("document:keydown.escape", ["$event"])
  onKeydownHandler(event: KeyboardEvent) {
    this.stateTooltip = false;
    this.viewTooltip = false;
  }
  @HostListener("document:click", ["$event"])
  onClick(event: { target: { attributes: { id: { value: any } } } }) {
    try {
      this.tooltip_Id = event.target.attributes.id.value;
      if (this.tooltip_Id === "state") {
        this.stateTooltip = true;
        this.viewTooltip = false;
        this.tt_text = "State Route";
      } else if (this.tooltip_Id === "view") {
        this.viewTooltip = true;
        this.stateTooltip = false;
        this.tt_text = "View Route";
      } else if (this.tooltip_Id === "tooltip") {
      } else {
        this.stateTooltip = false;
        this.viewTooltip = false;
      }
    } catch (e) {
      this.stateTooltip = false;
      this.viewTooltip = false;
    }
  }
}

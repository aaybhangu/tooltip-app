import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { StateComponent } from "./state/state.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  { path: "state", component: StateComponent },
  { path: "view", component: ViewComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

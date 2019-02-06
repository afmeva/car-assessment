import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { DetailsComponent } from "./pages/details/details.component";
import { CompareCarsComponent } from "./pages/compare-cars/compare-cars.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "compare", component: CompareCarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: !history.pushState })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

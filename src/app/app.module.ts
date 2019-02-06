import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { DetailsComponent } from "./pages/details/details.component";
import { CompareCarsComponent } from "./pages/compare-cars/compare-cars.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    CompareCarsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

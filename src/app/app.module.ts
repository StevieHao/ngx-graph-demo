import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxGraphModule } from "@swimlane/ngx-graph";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, NgxGraphModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

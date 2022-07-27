import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CustomInterceptor } from "./interceptor/custom.interceptor"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass : CustomInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ErrorHandler, NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CustomInterceptor } from "./interceptor/custom.interceptor"

import { appReducer } from "./state/app.reducer"
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from "@ngrx/store"
import { MessageService } from "primeng/api"
import { ToastModule } from "primeng/toast"
import { CustomErrorHandler } from "./handler/custom.error.handler"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ app: appReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
    { provide: ErrorHandler, useClass:CustomErrorHandler},
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

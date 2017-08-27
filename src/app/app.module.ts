import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';

// import observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDLzYjegGUPrMGjY3enxPhq7EPZUxMa_nY",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// Import the AgmCoreModule class from the @agm/core module.
// Use the AgmCoreModule.forRoot() method and specify the places library.
// Use ReactiveFormsModule for Angular’s new model-driven forms.
// http://brianflove.com/2016/10/18/angular-2-google-maps-places-autocomplete/

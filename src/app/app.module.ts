import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingService } from './listing.service';
import { ListingsComponent } from './listings/listings.component';
import { FieldDisplayComponent } from './field-display/field-display.component';
import { NguiMapModule} from '@ngui/map';


@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    FieldDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBoUHjDXAY3bW22jvxrc-ce3zBSjOs4yHs'}),
    NgbModule.forRoot()
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

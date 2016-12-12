import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NG2SeedComponent }  from './ng2-seed.component';
import { NavigationMain } from './core/components/navigation-main/navigation-main';
/*
 { AppComponent }  from './app.component';
 */

@NgModule({
  imports: [ BrowserModule, NgbModule.forRoot() ],
  declarations: [ NavigationMain, NG2SeedComponent],
  bootstrap:    [ NG2SeedComponent ]
})
export class MarketingModule { }
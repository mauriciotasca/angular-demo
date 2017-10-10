import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PresidentComponent } from './president/president.component';
import { SenatorComponent } from './senator/senator.component';
import { PoliticianComponent } from './politician/politician.component';
import { SenatorHobbiesComponent } from './senator/senator-hobbies/senator-hobbies.component';
import { MakeBoldPipe } from './make-bold.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PresidentComponent,
    SenatorComponent,
    PoliticianComponent,
    SenatorHobbiesComponent,
    MakeBoldPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainComponent } from './Components/mainComponent';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class MainModule { }
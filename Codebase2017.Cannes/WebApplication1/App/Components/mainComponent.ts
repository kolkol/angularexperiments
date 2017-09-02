import { Component, OnInit } from '@angular/core';  

@Component({
    selector: 'main-component',
    template: '<h3>HEre is a hardcoded template</h3>',
    providers: []
})
export class MainComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log("Ran on init")
    }
}
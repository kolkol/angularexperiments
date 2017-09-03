import { Component, OnInit } from '@angular/core';  

//Model start
export class Hero {
    id: number;
    name: string;
}
//Model end


@Component({
    selector: 'app-component',
    template: `
          <h1>{{title}}</h1>
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <input [(ngModel)]="hero.name" placeholder="name">
          `,
    providers: []
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() { }

    ngOnInit() {
        console.log("Ran on init")
    }
}


import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero/hero';
import {HeroService} from '../hero-service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this
      .heroService
      .getHeroes()
      .subscribe(value => this.heroes = value.slice(0, 4));
  }

}

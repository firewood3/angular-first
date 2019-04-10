import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero/hero';
import {HeroService} from '../hero-service/hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-det',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;

  constructor(private heroService: HeroService,
              private activatedRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this
      .heroService
      .getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this
      .heroService
      .updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}

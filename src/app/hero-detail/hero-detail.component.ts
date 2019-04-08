import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero/hero';

@Component({
  selector: 'app-hero-det',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}

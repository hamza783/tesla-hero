import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HeroService } from '../hero.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {

  username="";
  public subscription: Subscription;
  constructor(private router: Router, private heroService: HeroService) { }

  ngOnInit(): void {
    // set subscribe to message service
    this.subscription = this.heroService.getMessage().subscribe(msg => this.username = msg);
    this.username='Sign In';
  }

  ngOnRender(): void {
    this.username='Sign In';
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

}

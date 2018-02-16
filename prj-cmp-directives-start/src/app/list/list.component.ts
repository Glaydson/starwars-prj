import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/star-wars.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters = [];
  activadedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = 'all';
  subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activadedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    // this.swService.fetchCharacters();
    // executed when the component is initialized
    // register the subscriber
    this.activadedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
        this.loadedSide = params.side;
      }
    );
    // register another subscriber
    this.subscription = this.swService.charactersChanged.subscribe(
      () => {
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

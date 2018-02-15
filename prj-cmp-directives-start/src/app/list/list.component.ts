import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activadedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activadedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    // executed when the component is initialized
    this.activadedRoute.params.subscribe(
      (params) => {
        this.characters = this.swService.getCharacters(params.side);
      }
    )
  }


}

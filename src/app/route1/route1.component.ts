import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgSrc = "https://images.unsplash.com/photo-1558401549-29b4893f4d9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixlib=rb-1.2.1&q=80&w=1600";

}

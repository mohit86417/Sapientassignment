import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "100.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product1",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "52.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product2",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product3",
        "quantity": 90316
    },
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "190.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product1",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "400.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product2",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "239.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product3",
        "quantity": 90316
    },
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "670.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product1",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "332.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product2",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "212.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product3",
        "quantity": 90316
    },
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "10.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product1",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "307.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product2",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product3",
        "quantity": 90316
    },
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "170.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product1",
        "quantity": 56840
    },
    {
        "id": 2,
        "name": "Rustic Concrete Chicken",
        "description": "Sint libero mollitia.",
        "price": "302.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product2",
        "quantity": 9358
    },
    {
        "id": 3,
        "name": "Fantastic Metal Computer",
        "description": "In consequuntur cupiditate et unde minus.",
        "price": "279.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product3",
        "quantity": 90316
    },
    {
        "id": 1,
        "name": "Licensed Frozen Hat",
        "description": "Incidunt et magni est ut.",
        "price": "170.00",
        "imageUrl": "https://source.unsplash.com/1600x900/?product1",
        "quantity": 56840
    }
];

check:boolean = false;

gridView() {
   this.check = true;
}
listView() {
   this.check = false;
}

}


import { Component, OnInit } from '@angular/core';

import { CatGeneratorService } from '../services/cat-generator.service';

import { Product } from '../interfaces/product';
import { GenerateRandomCat } from '../interfaces/generate-random-cat';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';

@Component({
  selector: 'app-cat-generator',
  templateUrl: './cat-generator.component.html',
  styleUrls: ['./cat-generator.component.scss'],
  // animations: [
  //   trigger('show',[
  //     transition(':hover',[
  //       style({ transform: 'scale(1.7)' }),
  //       animate('1s')
  //     ])
  //   ])
  // ]
})
export class CatGeneratorComponent implements OnInit {

  cat = {} as GenerateRandomCat;
  loading = false;
  product = {} as Product;

  constructor(
    private catService: CatGeneratorService
  ) { }

  ngOnInit(): void {
    console.log("cat ",this.cat);

    // this.catService.getProduct().subscribe(
    //   (product) => {
    //     this.product = product;
    //     console.log("Products : ", this.product);
    //
    //   }
    // )
  }

  getRandomCat(): void {
    console.log("generating...");

    // show loading bar when fetching
    this.loading = true;

    this.catService.getRandomCat().subscribe(
      (cat) => {
        this.cat = cat;
        console.log("Cat URL: ", this.cat);

        // after finishing fetching the data
        // loading state will be false
        this.loading = false;

      }
    );
  }

}

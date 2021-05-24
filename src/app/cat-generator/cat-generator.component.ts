import { Component, OnInit } from '@angular/core';

import { CatGeneratorService } from '../services/cat-generator.service';

import { Product } from '../interfaces/product';
import { GenerateRandomCat } from '../interfaces/generate-random-cat';

// Font Awesome
import { faCat } from '@fortawesome/free-solid-svg-icons';

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
  errorMsg: string = "";
  success_msg = false;
  faCat = faCat;

  scrollElem: any = "";

  constructor(
    private catService: CatGeneratorService
  ) { }

  ngOnInit(): void {
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
    this.scrollElem = document.querySelector('#image');

    // show loading bar when fetching
    this.loading = true;
    this.errorMsg = "";
    this.success_msg = false;

    this.catService.getRandomCat().subscribe(
      (cat) => {
        this.cat = cat;

        this.scrollElem.scrollIntoView();

        // after finishing fetching the data
        // loading state will be false
        this.loading = false;

      },
      (error_msg) => {
        this.errorMsg = error_msg;

        // after finishing fetching the data
        // loading state will be false
        this.loading = false;
        console.log("Error", this.errorMsg);

      }
    );
  }

}

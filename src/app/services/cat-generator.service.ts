import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { GenerateRandomCat } from '../interfaces/generate-random-cat';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CatGeneratorService {

  headers = new HttpHeaders()
                .set('Content-Type', '*/*')
                .set('Access-Control-Allow-Origin', 'http://localhost:4200/')
                .set('Access-Control-Allow-Credentials', 'true');
  constructor(
    private http: HttpClient,
  ) { }


  getProduct(): Observable<Product> {
    const url = "http://localhost:8080/api/products";

    return this.http.get<Product>(url);
  }

  getRandomCat(): Observable<GenerateRandomCat> {
    const url = "https://thatcopy.pw/catapi/rest/";

    return this.http.get<GenerateRandomCat>(url);
  }

  // getRandomGifCat(): void{
  //   const url = "https://aws.random.cat/meow";
  // }

}

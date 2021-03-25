import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookRepoService {

  CSVData:Product[]=[]

  constructor(private http:HttpClient) { }
  getBooks()
  {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET');
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get<any[]>("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json",{headers: headers})
  }
  getCSVData()
  {
    this.http.get('assets/CSVData.csv',{responseType: 'text'}).subscribe(data=>{
      let csvToRowArray = data.split("\n");
            for (let index = 1; index < csvToRowArray.length - 1; index++) {
              let row = csvToRowArray[index].split(",");
              this.CSVData.push(new Product( row[0], row[1], row[2].trim(),row[3].trim(),row[4].trim()));
            }
    })
    
    return this.CSVData
  }
}

export class Product{
  product_name
  retail_price
  discounted_price
  description
  brand

  constructor(product_name,retail_price,discounted_priice,description,brand){
    this.brand=brand,
    this.discounted_price=discounted_priice
    this.description=description
    this.product_name=product_name
    this.retail_price=retail_price
  }
}


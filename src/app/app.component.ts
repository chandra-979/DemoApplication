import { BookRepoService , Product } from './book-repo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  books:any[]=[];
  cart:any[]=[]
  p:number=1
  cartcount=1
  orderBy:string='price';
  reverse:boolean=false;
  products:Product[]=[];
  errMsg;
  table_value
  value
  table_items:number=1
  constructor(private service:BookRepoService){
  }
  ngOnInit(): void {
    this.service.getBooks().subscribe(data=>{
      this.books=data
    })
    this.products=this.service.getCSVData()
    console.log(this.products)
  }
  addToCart(book)
  {
    let f=1
    for(let b of this.cart)
    {
      
      if(b.bookID==book.bookID)
      {
  
        window.alert("Book exist in cart")
        f=0;
        break
      }
      
    }
    if(f===1)
      {
    
        this.cart.push(book)
      }
  }
  removeFromCart(book)
  {
    this.cart=this.cart.filter(x=>x.bookID!=book.bookID)
  }
  getSearchBook()
  {
    console.log("search function")
    return this.books.filter(x=>{x.bookID===this.value})
  }
  
  title = 'BooksRepo';
}

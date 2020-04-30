import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
     productData: any = [];
  constructor(private productService:ProductService) { }
  public fetchdata(){
    this.productService.getData().subscribe(result => {
      this.productData = result['standup'];
    });
    
  
  }
  public postNewData(){
    let product= {
	"ProductName":"chips",
	"ProductDesc":"abcdeeefgggg",
	"ProductPrice":"200",
	"ManuDate":"04/20/2020",
	"ExpDate":"04/20/2020"
}


  this.productService.postData(product).subscribe( result => {
    console.log(result,product);
  });
 
  }
public putNewData(){
  let product={
    "_id": "5ea839fbbf37c33b6cf39e48",
    "ProductName": "diarymilk",
    "ProductDesc": "abcdefgjjjjj",
    "ProductPrice":"100",
    "ManuDate": "2020-04-20T04:00:00.000Z",
    "ExpDate": "2020-04-20T04:00:00.000Z",
    
} 
 this.productService.putData(product).subscribe(result => {
   console.log(result);
 });
  }

public deleteOneData(){
  this.productService.deleteData().subscribe(result => {
    console.log(result);
  })
}  


  ngOnInit(): void {
  }

}

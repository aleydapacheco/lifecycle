import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterContentInit,AfterViewChecked,OnDestroy{
  
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  constructor() {
    console.log('Constructor');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy.');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges.');
  }
  ngOnInit(): void {
    console.log('ngOnInit.');
  }

  //Metodos
  increasePrice(){
    this.currentPrice++;
  }
}

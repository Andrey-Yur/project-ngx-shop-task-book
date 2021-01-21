import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})

export class ShopCardComponent {
  @Output() public decrement = new EventEmitter();
  @Output() public increment = new EventEmitter();
@Input() public product: ICartProduct = {} as ICartProduct;
 public decrPr(): void{
  this.decrement.emit();
  }
 public incrPr(): void{
    this.increment.emit();
  }
}

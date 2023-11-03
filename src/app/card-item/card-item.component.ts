import { Component, Input, Output, EventEmitter} from '@angular/core';
interface Book{
  id: number,
  author_id: number,
  title: string,
  cover_image: string,
  pages: number,
  releaseDate: number,
  isbn: string
}
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
 @Input() item : Book | undefined;
 @Output() removeFromCart : EventEmitter<number> = new EventEmitter()

 removeBook(id:number){
    this.removeFromCart.emit(id)
 }

 productQuantity : number =1;
  quantity(value : string){
      if(this.productQuantity < 9 && value=="increase"){
        this.productQuantity +=1;
      }

      if(this.productQuantity > 0 && value=="decrease"){
        this.productQuantity -=1;
      }
  }

}

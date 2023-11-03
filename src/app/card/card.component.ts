import { Component, Input, Output,EventEmitter } from '@angular/core';

interface Book {
  id: number,
  author_id: number,
  title: string,
  cover_image: string,
  pages: number,
  releaseDate: number,
  isbn: string
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book: Book | undefined;
  @Output()  addBook:EventEmitter<any> = new EventEmitter();

  addToCart(book : Book){
     this.addBook.emit(book);
  }
}

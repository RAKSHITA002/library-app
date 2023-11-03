import { Component } from '@angular/core';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class4';
 books = [
    {
      id: 1,
      author_id: 1,
      title: "Oliver Twist",
      cover_image: "https://img.buzzfeed.com/buzzfeed-static/static/2020-12/24/17/asset/0d7df273f391/sub-buzz-11109-1608830847-14.jpg",
      pages: 234,
      releaseDate: 1839,
      isbn: "wt345"
    },
    {
      id: 2,
      author_id: 1,
      title: "Hard Times",
      cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzj80w68bs-KvofndDaIsPjrYO07joPY4DCJmlyPc57szaOYWySTOD0-jV5-Bq8Z5Ieo&usqp=CAU",
      pages: 300,
      releaseDate: 1854,
      isbn: "jk654"
    },
    {
      id: 3,
      author_id: 3,
      title: "Hamlet",
      cover_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ497L8iNc3VgBYTvCmnOFlSMRYU48XfA_oj66epX2Gykpl07x0YGLTCPsrrPrbwwrqsM&usqp=CAU",
      pages: 160,
      releaseDate: 1603,
      isbn: "po789"
    },
    {
      id: 4,
      author_id: 2,
      title: "IT",
      cover_image: "https://qph.cf2.quoracdn.net/main-qimg-9b4267c07c73a0c6099650d9fd3e9933-lq",
      pages: 500,
      releaseDate: 2017,
      isbn: "yu098"
    },
    {
      id: 5,
      author_id: 4,
      title: "Norwegian Wood",
      cover_image: "http://t1.gstatic.com/images?q=tbn:ANd9GcQvJJDi2mzwg9v_PlmKYL31gXIz0kvAObJak7DVFPcD_mJTIyec",
      pages: 296,
      releaseDate: 1987,
      isbn: "hj846"
    },
    {
      id: 6,
      author_id: 4,
      title: "Kafka on the Shore",
      cover_image: "http://t0.gstatic.com/images?q=tbn:ANd9GcRHFU_j93PPsbQGqoaZJnHH6-Emk_sIxG823SkoRTL0nvdEP41f",
      pages: 505,
      releaseDate: 2002,
      isbn: "op012"
    },
    {
      id: 7,
      author_id: 4,
      title: "After Dark",
      cover_image: "http://t3.gstatic.com/images?q=tbn:ANd9GcQBMNA8A19vQpNY4bkgadsLhiRUFqBKwKAA6ANrw8VEtOiPrYQJ",
      pages: 208,
      releaseDate: 2004,
      isbn: "cv456"
    },
    {
      id: 8,
      author_id: 4,
      title: "1Q84",
      cover_image: "http://t0.gstatic.com/images?q=tbn:ANd9GcTBQZSg-b2LFkLlt9fWndS1w8SONabDZBHf0dtdb3-bqcuKxduL",
      pages: 928,
      releaseDate: 2009,
      isbn: "al207"
    }
  ];

  cartItems: Array<Book> = []
  total : number =0

  insertBook(e:Book){
    this.cartItems.push(e)
    this.total = this.total + (e.releaseDate)
  }

  removeItem(id:number ){
    let itemIndex = this.cartItems.findIndex(obj => obj.id === id)
    this.total = Math.floor(this.total - this.cartItems[itemIndex].releaseDate)
    this.cartItems.splice(itemIndex, 1)

  }

}

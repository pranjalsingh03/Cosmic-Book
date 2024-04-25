import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  books: any[] = [];
  selectedBook: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.loadBookDetails(id);
      }
    });
  }

  loadBookDetails(id: string) {
    this.http.get<any>('https://cosmic-book.vercel.app/assets/book.json').subscribe({
      next: (data) => {
        // console.log('Fetched data:', data);
        if (Array.isArray(data.books)) {
          const book = data.books.find((item: any) => item.id === Number(id));
          if (book) {
            this.selectedBook = book;
            // console.log('Selected Book:', this.selectedBook);
          } else {
            console.error('Book not found with ID:', id);
          }
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      },
      error: (err) => {
        console.error('Error loading books:', err);
      }
    });
  }
}

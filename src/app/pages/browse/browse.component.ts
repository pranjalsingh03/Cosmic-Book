import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  books: any[] = [];
  searchTerm = "";

  loadBooks() {
    this.http.get<any>('https://cosmic-book.vercel.app/assets/book.json').subscribe({
      next: (data) => {
        if (Array.isArray(data.books)) {
          this.books = data.books;
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      },
      error: (err) => {
        console.error('Error loading books:', err);
      }
    });
  }

  onSearch() {
    if (this.searchTerm.trim() !== "") {
      this.books = this.books.filter((book) => {
        return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      this.loadBooks();
    }
  }

  goToDetailsPage(id: string) {
    this.router.navigate(['/read', id]);
  }  
}

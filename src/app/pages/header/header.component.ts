import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit() {
    this.loadBooks();
  }
  
  books: any[] = [];
  searchTerm = "";
  searchResults: any[] = [];
  isSearchPopupOpen = false;

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
      this.searchResults = this.books.filter((book) => {
        return book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
      this.isSearchPopupOpen = true;
    } else {
      this.searchResults = [];
      this.isSearchPopupOpen = false;
    }
  }

  closeSearchPopup() {
    this.isSearchPopupOpen = false;
  }
  goToDetailsPage(id: string) {
    this.router.navigate(['/read', id]);
  }  
}

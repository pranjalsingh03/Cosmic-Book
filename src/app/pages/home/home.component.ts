import { Component , OnInit } from '@angular/core';
import $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected to styleUrls
})
export class HomeComponent implements OnInit{
  books: any[]=[];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
    $(document).ready(function() {
      $('.next').click(function() {
        $('.slider').animate({
          marginLeft: "-=100%"
        }, 500, function() {
          $(this).append($('.slide:first-child')).css({
            marginLeft: 0
          });
        });
      });
    
      $('.prev').click(function() {
        $('.slider').prepend($('.slide:last-child')).css({
          marginLeft: "-100%"
        }).animate({
          marginLeft: 0
        }, 500);
      });
    });    
  }
  loadBooks() {
    this.http.get<any>('http://localhost:4200/assets/book.json').subscribe({
      next: (data) => {
        console.log('Fetched data:', data);
        if (Array.isArray(data.books)) {
          this.books = data.books;
          console.log('Books:', this.books);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      },
      error: (err) => {
        console.error('Error loading books:', err);
      }
    });
  }
  
  
  goToBook(type: string, id: string) {
    this.router.navigate(['book', type, id]);
  }
}

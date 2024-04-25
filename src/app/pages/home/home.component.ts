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
  romance: any[]=[];
  fantasy: any[]=[];
  action: any[]=[];
  adventure: any[]=[];
  
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loadBooks();
    this.loadRomance();
    this.loadFantasy();
    this.loadAction();
    this.loadAdventure();
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
    this.http.get<any>('https://cosmic-book.vercel.app/assets/book.json').subscribe({
      next: (data) => {
        // console.log('Fetched data:', data);
        if (Array.isArray(data.books)) {
          this.books = data.books;
          // console.log('Books:', this.books);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      },
      error: (err) => {
        console.error('Error loading books:', err);
      }
    });
  }
  loadRomance(){
    this.http.get<any>('https://cosmic-book.vercel.app/assets/romance.json').subscribe({
      next: (data) => {
        // console.log('Fetched data:', data);
        if (Array.isArray(data.romance)) {
          this.romance = data.romance;
          // console.log('Romance:', this.romance);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      },
      error: (err) => {
        console.error('Error loading romance:', err);
      }
    });
  }
  loadFantasy(){
    this.http.get<any>('https://cosmic-book.vercel.app/assets/fantasy.json').subscribe({
      next:(data)=>{
        // console.log('Fetched data:', data);
        if(Array.isArray(data.fantasy)){
          this.fantasy = data.fantasy;
          // console.log('Fantasy:', this.fantasy);
        }else{
          console.error('Invalid data format. Expected an array.');
        }
      },
      error:(err)=>{
        console.error('Error loading fantasy:', err);
      }
    });
  }
  loadAction(){
    this.http.get<any>('https://cosmic-book.vercel.app/assets/action.json').subscribe({
      next:(data)=>{
        // console.log('Fetched data:', data);
        if(Array.isArray(data.action)){
          this.action = data.action;
          // console.log('Action:', this.action);
        }else{
          console.error('Invalid data format. Expected an array.');
        }
      },
      error:(err)=>{
        console.error('Error loading action:', err);
      }
    });
  }
  loadAdventure(){
    this.http.get<any>('https://cosmic-book.vercel.app/assets/adventure.json').subscribe({
      next:(data)=>{
        // console.log('Fetched data:', data);
        if(Array.isArray(data.adventure)){
          this.adventure = data.adventure;
          // console.log('Adventure:', this.adventure);
        }else{
          console.error('Invalid data format. Expected an array.');
        }
      },
      error:(err)=>{
        console.error('Error loading adventure:', err);
      }
    });
  }
  
  goToBook(type: string, id: string) {
    this.router.navigate(['book', type, id]);
  }
}

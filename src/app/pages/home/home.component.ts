import { Component , OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
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
}

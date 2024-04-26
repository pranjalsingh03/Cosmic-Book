import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-write',
    templateUrl: './write.component.html',
    styleUrls: ['./write.component.css']
})
export class WriteComponent {
  constructor(private http: HttpClient, private router: Router) { }

    book = {
        title: '',
        author: '',
        description: ''
    };

    submitBook() {
        console.log('Submitting book:', this.book);
        this.router.navigate(['/']);
    }
}

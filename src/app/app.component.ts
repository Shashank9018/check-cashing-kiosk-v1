import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Kiosk Cashing';
  constructor(private router: Router) {}

  navigateTo(page: string) {
    if (page === 'existing') {
      this.router.navigate(['/existing-customer']);
    } else {
      this.router.navigate(['/new-user']);
    }
  }
}

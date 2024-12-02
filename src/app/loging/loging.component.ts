import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-loging',
  standalone: true,
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css'],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogingComponent {
  constructor(private router: Router) {}

  logIn() {
    this.router.navigate(['/admission']);
  }
}

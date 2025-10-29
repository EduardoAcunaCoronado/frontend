import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormFirst} from './form-first/form-first';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormFirst],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}

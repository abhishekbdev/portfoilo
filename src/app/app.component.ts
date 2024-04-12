import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutCardComponent } from './about-card/about-card.component';
import { ContentPageComponent } from './content-page/content-page.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AboutCardComponent,
    ContentPageComponent,
    MenuCardComponent,
    HeaderComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

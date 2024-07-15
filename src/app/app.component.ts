import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    PerfilComponent,
    HeaderComponent    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio1';
  isSideNavCollapsed = false;
 
}
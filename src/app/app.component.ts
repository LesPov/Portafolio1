import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './componets/body/body.component';
import { HeaderComponent } from './componets/header/header.component';
import { PerfilComponent } from './componets/perfil/perfil.component';

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
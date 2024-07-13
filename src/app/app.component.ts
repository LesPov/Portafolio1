import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HeaderComponent } from './header/header.component';
import { PointsatarComponent } from './pointsatar/pointsatar.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BodyComponent,
    SidenavComponent,
    PerfilComponent,
    HeaderComponent,
    PointsatarComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio1';
  isSideNavCollapsed = false;
 
}
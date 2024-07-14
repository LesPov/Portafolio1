import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterModule, SidenavComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  navData = navbarData;

}

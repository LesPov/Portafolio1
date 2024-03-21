import { Component, EventEmitter, HostListener, OnInit, Output, Inject } from '@angular/core';
import { navbarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { BodyComponent } from '../body/body.component';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface SidenNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule,BodyComponent ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent  {
  @Output() onToggleSideNav: EventEmitter<SidenNavToggle> = new EventEmitter();
  
  navData = navbarData;

 
}

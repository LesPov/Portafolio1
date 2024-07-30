import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { navbarData } from '../sidenav/nav-data';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ RouterModule,SidenavComponent],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

}
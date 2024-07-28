import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { navbarData } from '../sidenav/nav-data';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  navData = navbarData;
  navMenu: HTMLElement | null = null;
  navToggle: HTMLElement | null = null;
  navClose: HTMLElement | null = null;

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.navMenu = document.getElementById('nav-menu');
      this.navToggle = document.getElementById('nav-toggle');
      this.navClose = document.getElementById('nav-close');

      if (this.navToggle) {
        this.navToggle.addEventListener('click', this.showMenu.bind(this));
      }

      if (this.navClose) {
        this.navClose.addEventListener('click', this.hideMenu.bind(this));
      }

      const navLinks = document.querySelectorAll('.nav_link');
      navLinks.forEach(link => {
        link.addEventListener('click', this.linkAction.bind(this));
      });
    }
  }

  showMenu(): void {
    if (this.navMenu && this.navToggle) {
      this.navMenu.classList.add('show-menu');
      this.navToggle.style.display = 'none';
    }
  }

  hideMenu(): void {
    if (this.navMenu && this.navToggle) {
      this.navMenu.classList.remove('show-menu');
      this.navToggle.style.display = 'block';
    }
  }

  linkAction(event: Event): void {
    event.preventDefault();
    const target = event.currentTarget as HTMLAnchorElement;
    const sectionId = target.getAttribute('href') || '#about';

    if (this.navMenu && this.navToggle) {
      this.navMenu.classList.remove('show-menu');
      this.navToggle.style.display = 'block';
    }

    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

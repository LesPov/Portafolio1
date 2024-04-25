import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pointsatar',
  standalone: true,
  imports: [],
  templateUrl: './pointsatar.component.html',
  styleUrl: './pointsatar.component.css'
})
export class PointsatarComponent implements OnInit {
  darkTheme = 'dark-theme';
  iconTheme = 'uil-sun';

  constructor() { }

  ngOnInit(): void {
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => document.getElementById('theme-button')?.classList.contains(this.iconTheme) ? 'uil-moon' : 'uil-sun';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](this.darkTheme);
      document.getElementById('theme-button')?.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](this.iconTheme);
    }
  }

  toggleTheme(): void {
    document.body.classList.toggle(this.darkTheme);
    document.getElementById('theme-button')?.classList.toggle(this.iconTheme);

    localStorage.setItem('selected-theme', this.getCurrentTheme());
    localStorage.setItem('selected-icon', this.getCurrentIcon());
  }

  getCurrentTheme(): string {
    return document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
  }

  getCurrentIcon(): string {
    return document.getElementById('theme-button')?.classList.contains(this.iconTheme) ? 'uil-moon' : 'uil-sun';
  }
}
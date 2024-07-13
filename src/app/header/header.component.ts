import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private darkTheme = 'dark-theme';
  private iconTheme = 'uil-sun';

  constructor() { }

  ngOnInit(): void {
    const selectedTheme = this.isWindowAvailable() ? localStorage.getItem('selected-theme') : null;
    const selectedIcon = this.isWindowAvailable() ? localStorage.getItem('selected-icon') : null;

    if (selectedTheme) {
      this.applyTheme(selectedTheme, selectedIcon || '');
    }
  }

  isWindowAvailable(): boolean {
    return typeof window !== 'undefined';
  }

  toggleTheme(): void {
    const currentTheme = this.getCurrentTheme();
    const currentIcon = this.getCurrentIcon();

    this.applyTheme(currentTheme === 'dark' ? 'light' : 'dark', currentIcon === 'uil-moon' ? 'uil-sun' : 'uil-moon');

    localStorage.setItem('selected-theme', currentTheme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('selected-icon', currentIcon === 'uil-moon' ? 'uil-sun' : 'uil-moon');
  }

  private getCurrentTheme(): string {
    return document.body.classList.contains(this.darkTheme) ? 'dark' : 'light';
  }

  private getCurrentIcon(): string {
    const themeButton = document.getElementById('theme-button');
    return themeButton?.classList.contains(this.iconTheme) ? 'uil-moon' : 'uil-sun';
  }

  private applyTheme(theme: string, icon: string): void {
    document.body.classList[theme === 'dark' ? 'add' : 'remove'](this.darkTheme);
    this.getElementByIdAndApplyClass('theme-button', this.iconTheme, icon === 'uil-moon');
  }

  private getElementByIdAndApplyClass(id: string, className: string, shouldAdd: boolean): void {
    const element = document.getElementById(id);
    if (element) {
      element.classList[shouldAdd ? 'add' : 'remove'](className);
    }
  }
}
 
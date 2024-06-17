// resume.component.ts
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChildren('wrapper') wrapperRefs!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ticket') ticketRefs!: QueryList<ElementRef<HTMLDivElement>>;

  tickets = [
    { title: 'Angular', img: '../../assets/img/angular.png' },
    { title: 'React', img: '../../assets/img/react.png' },
    { title: 'Vue', img: '../../assets/img/vue.png' },
    { title: 'Svelte', img: '../../assets/img/svelte.png' },
    { title: 'Node', img: '../../assets/img/node.png' },
    { title: 'Python', img: '../../assets/img/python.png' },
    { title: 'Java', img: '../../assets/img/java.png' },
    { title: 'C#', img: '../../assets/img/csharp.png' },
    { title: 'PHP', img: '../../assets/img/php.png' }
  ];

  colors = [
    { border: '#dd002c', shadow: '#dd002cb4' }, // Red for Angular
    { border: '#61DAFB', shadow: '#61DAFBb4' }, // Blue for React
    { border: '#42b883', shadow: '#42b883b4' }, // Green for Vue
    { border: '#ff3e00', shadow: '#ff3e00b4' }, // Orange for Svelte
    { border: '#8cc84b', shadow: '#8cc84bb4' }, // Green for Node
    { border: '#306998', shadow: '#306998b4' }, // Blue for Python
    { border: '#b07219', shadow: '#b07219b4' }, // Brown for Java
    { border: '#178600', shadow: '#178600b4' }, // Green for C#
    { border: '#777BB4', shadow: '#777BB4b4' }  // Purple for PHP
  ];

  ngAfterViewInit() {
    this.wrapperRefs.forEach((wrapper, index) => {
      const ticket = this.ticketRefs.toArray()[index].nativeElement;

      fromEvent(wrapper.nativeElement, 'mouseenter').subscribe(() => {
        const { width, height } = wrapper.nativeElement.getBoundingClientRect();
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        const handleMouseMove = (event: MouseEvent) => {
          const { offsetX, offsetY } = event;
          const rotationX = ((offsetX - halfWidth) / halfWidth) * 30;
          const rotationY = ((offsetY - halfHeight) / halfHeight) * 30;
          ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
          ticket.style.transition = 'transform 0.3s';
        };

        const handleMouseLeave = () => {
          ticket.style.transform = 'rotateX(0deg) rotateY(0deg)';
        };

        wrapper.nativeElement.addEventListener('mousemove', handleMouseMove);
        wrapper.nativeElement.addEventListener('mouseleave', handleMouseLeave);
      });
    });
  }

  getStyle(index: number) {
    return {
      border: `2px solid ${this.colors[index].border}`,
      boxShadow: `0 0 20px 5px ${this.colors[index].shadow}`
    };
  }

  getBg1Style(index: number) {
    return {
      boxShadow: `0 0 20px 0px ${this.colors[index].border}`,
      border: `1px solid ${this.colors[index].border}`
    };
  }

  getBg2Style(index: number) {
    return {
      boxShadow: `0 0 15px 0px ${this.colors[index].border}`,
      border: `1px solid ${this.colors[index].border}`
    };
  }
    // Función para obtener los estilos de los pseudo-elementos ::before y ::after
    getPseudoElementStyle(index: number) {
      return {
        borderColor: this.colors[index].border,
        boxShadow: `0 0 20px 5px ${this.colors[index].border}`
      };
    }
}

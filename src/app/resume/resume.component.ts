import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('wrapper', { static: false }) wrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ticket', { static: false }) ticketRef!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const wrapper = this.wrapperRef.nativeElement;
    const ticket = this.ticketRef.nativeElement;

    fromEvent(wrapper, 'mouseenter')
      .subscribe(() => {
        const { width, height } = wrapper.getBoundingClientRect();
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

        wrapper.addEventListener('mousemove', handleMouseMove);
        wrapper.addEventListener('mouseleave', handleMouseLeave);
      });
  }
}
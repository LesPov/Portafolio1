import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('wrapper', { static: false }) wrapperRef!: ElementRef<HTMLDivElement>;
  @ViewChild('ticket', { static: false }) ticketRef!: ElementRef<HTMLDivElement>;
  @ViewChild('wrapper2', { static: false }) wrapper2Ref!: ElementRef<HTMLDivElement>;
  @ViewChild('ticket2', { static: false }) ticket2Ref!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    this.addHoverEffect(this.wrapperRef, this.ticketRef);
    this.addHoverEffect(this.wrapper2Ref, this.ticket2Ref);
  }

  addHoverEffect(wrapperRef: ElementRef<HTMLDivElement>, ticketRef: ElementRef<HTMLDivElement>) {
    const wrapper = wrapperRef.nativeElement;
    const ticket = ticketRef.nativeElement;
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

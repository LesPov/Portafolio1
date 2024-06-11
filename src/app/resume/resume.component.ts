import { Component, ElementRef, HostListener, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('ticket') ticket!: ElementRef;

  width!: number;
  height!: number;
  halfWidth!: number;
  halfHeight!: number;

  ngAfterViewInit() {
    const wrapperElement = this.wrapper.nativeElement;
    const { width, height } = wrapperElement.getBoundingClientRect();
    this.width = width;
    this.height = height;
    this.halfWidth = width / 2;
    this.halfHeight = height / 2;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;

    const rotationX = ((offsetX - this.halfWidth) / this.halfWidth) * 20;
    const rotationY = ((offsetY - this.halfHeight) / this.halfHeight) * 20;

    const ticketElement = this.ticket.nativeElement;
    ticketElement.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    ticketElement.style.transition = 'transform 0.3s';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    const ticketElement = this.ticket.nativeElement;
    ticketElement.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }
}

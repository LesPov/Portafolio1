import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-resume',
  standalone: true,
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
  @ViewChildren('wrapper1, wrapper2, wrapper3, wrapper4, wrapper5, wrapper6') wrapperRefs!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('ticket1, ticket2, ticket3, ticket4, ticket5, ticket6') ticketRefs!: QueryList<ElementRef<HTMLDivElement>>;
  @ViewChildren('card1') cardRefs!: QueryList<ElementRef<HTMLDivElement>>;

  ngAfterViewInit() {
    this.wrapperRefs.forEach((wrapperRef, index) => {
      const ticketRef = this.ticketRefs.toArray()[index];
      this.addHoverEffect(wrapperRef, ticketRef);
    });

    this.cardRefs.forEach((cardRef) => {
      this.addCardHoverEffect(cardRef);
    });
  }

  addHoverEffect(wrapperRef: ElementRef<HTMLDivElement>, ticketRef: ElementRef<HTMLDivElement>) {
    const wrapper = wrapperRef.nativeElement;
    const ticket = ticketRef.nativeElement;
    fromEvent(wrapper, 'mouseenter').subscribe(() => {
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

  addCardHoverEffect(cardRef: ElementRef<HTMLDivElement>) {
    const card = cardRef.nativeElement;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Adjust for the center of the card
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--x', `50%`); // Center position when mouse leaves
      card.style.setProperty('--y', `50%`); // Center position when mouse leaves
    });
  }
}

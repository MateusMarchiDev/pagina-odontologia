import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AnimationStateService } from '../animation-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [
        animate('1.7s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition(':enter', [
        animate('2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
      transition(':enter', [
        animate('2.7s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private slideIndex = 0;
  private slides!: HTMLElement[];
  private slideInterval: any;

  constructor(public animationState: AnimationStateService) {}
  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
    window.removeEventListener('resize', this.updateSlideWidth.bind(this));
  }
  ngAfterViewInit(): void {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.startSlideShow();
    window.addEventListener('resize', this.updateSlideWidth.bind(this));
    setTimeout(() => {
      this.animationState.textContainerAnimated = true;
      this.animationState.imgDentistaAnimated = true;
      this.animationState.section2Animated = true;
    }, 0);
  }


  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.showSlides();
    }, 7000);
  }

  showSlides() {
    const screenWidth = window.innerWidth;
    const numSlides = screenWidth > 550 ? 3 : 1;
    const slideWidth = 100 / numSlides;

    this.slides.forEach((slide, index) => {
      slide.style.display = 'none';
      slide.style.minWidth = `${slideWidth}%`;
      if (index >= this.slideIndex && index < this.slideIndex + numSlides) {
        slide.style.display = 'block';
      }
    });

    this.slideIndex += numSlides;
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    }
  }
  updateSlideWidth() {
    clearInterval(this.slideInterval);
    this.showSlides();
    this.startSlideShow();
  }
}

import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private slideIndex = 0;
  private slides!: HTMLElement[];
  private slideInterval: any;

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
    window.removeEventListener('resize', this.updateSlideWidth.bind(this));
  }
  ngAfterViewInit(): void {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.startSlideShow();
    window.addEventListener('resize', this.updateSlideWidth.bind(this));
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

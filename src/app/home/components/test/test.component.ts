import { Component } from '@angular/core';
interface ImageItem {
  src: string;
  category: string;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  
  currentSlide: number = 0;
  slideCount: number = 8;

  ngOnInit() {
    setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount;
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
  }

  images: ImageItem[] = [
    { src: '../././../../../../../assets/images/loader/1.jpg', category: 'usa' },
    { src: '../././../../../../../assets/images/loader/2.jpg', category: 'japan' },
    // Add more image items here
  ];

  filteredImages: ImageItem[] = [...this.images];

  filterImages(category: string) {
    if (category === '') {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(image => image.category === category);
    }
  }
}

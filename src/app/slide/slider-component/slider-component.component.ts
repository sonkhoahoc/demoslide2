import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SliderService } from 'src/app/service/slider.service';

declare var $: any;

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements OnInit {

  slides: any[]= [];

  constructor(private http: SliderService) { }

  ngOnInit(): void {
    this.http.getSlides().subscribe(res => {
      this.slides = res;
      setTimeout(() => {
        this.initSlider();
      });
    });
  }

  initSlider(): void {
    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: true
    });
  }

}

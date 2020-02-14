import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
    @Input() slideInfo;
   /*@Output()slideClicked = new EventEmitter<number>();*/

  constructor(public router: Router) { }

  ngOnInit() {
      console.log(this.slideInfo);

  }

  clicaSlide(id) {
      this.router.navigate(['/livro', id]);
  };

}

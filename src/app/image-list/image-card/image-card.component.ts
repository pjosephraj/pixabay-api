import { Component, Input, OnInit } from '@angular/core';
import { ImageData } from '../../shared/image.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  @Input() image: ImageData;
  constructor() { }

  ngOnInit() {
  }


}

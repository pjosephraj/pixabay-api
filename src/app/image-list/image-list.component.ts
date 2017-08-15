import { Component, OnInit } from '@angular/core';

import { ImageService } from '../shared/image.service';
import { ImageData } from './../shared/image.model';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  searchQuery: any;
  images: ImageData[];
  dataLoaded: boolean = false;
  noImages: boolean = false;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  loadImages(query: string) {
    this.dataLoaded = true;
    this.noImages = false;
    return this.imageService.getImagesData(query, 15).subscribe(
      data => {
        this.images = data;
        if (this.images.length === 0) { this.noImages = true; }
        this.dataLoaded = false;
      });
  }

}

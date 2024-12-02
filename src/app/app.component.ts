import { ImgSrc } from './app.collection';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ApiFetchingService } from './app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgOptimizedImage, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  imgSrcArray: string[] = [];
  preImageSrcArray: number[] = [];
  uploadImgSrc: string = '';
  uploadImgSrcBase64: string = '';
  fetchingData: any = {};
  hasGetImageInfo: boolean = false;
  isLoading: boolean = false;
  starterData: string = ''
  constructor(private apiService: ApiFetchingService) {
    const imgSources = new ImgSrc();
    this.imgSrcArray = imgSources.imgSrc;
    this.preImageSrcArray = this.imgSrcArray.slice(2, 8).map((_, i) => i + 3);
  }
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadImgSrc = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        this.uploadImgSrcBase64 = base64String;
      };
      reader.readAsDataURL(file);
    }
  }

  async getImageInfo() {
    this.hasGetImageInfo = true;
    this.isLoading = true;
    const res = await this.apiService.getImageInfo(this.uploadImgSrcBase64);
    const imgSources = new ImgSrc();
    this.fetchingData = imgSources.fetchingData;
    this.starterData = this.formatImageInfo(
      this.fetchingData.result.classification.suggestions
    );
    this.isLoading = false;
  }

  formatImageInfo(data: any[]) {
    return 'This picture might be ' + data
      .map(
        (item) =>
          `${item.name} with probability of ${
            item.probability * 100
          }%`
      )
      .join(' or ');
  }
}

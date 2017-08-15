import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ImageData } from './image.model';

@Injectable()
export class ImageService {
  private API_KEY: string = environment.pixabayApiKey;
  private API_URL: string = environment.pixabayApiUrl;
  private query: string;
  private url: string = this.API_URL + this.API_KEY + '&q=';

  constructor(private http: Http) {
  }

  /**
   * Get Image data
   */
  getImagesData(query: string, perPage: number): Observable<ImageData[]> {
    return this.http.get(this.url + query + '&per_page=' + perPage)
      .map(res => res.json().hits)
      .map(data => data.map(this.toImageData))
      .catch(this.handleError);
  }

  /**
   * Convert Data info from the API to our standard/format
   */
  private toImageData = (data): ImageData => {
    return {
      likes: data.likes,
      tags: data.tags.split(','),
      views: data.views,
      downloads: data.downloads,
      pageURL: data.pageURL,
      webformatURL: data.webformatURL,
      user: data.user,
      userImageURL: data.userImageURL || data.webformatURL
    };
  }

  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      const body = err.json() || '';
      const error = JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }

}

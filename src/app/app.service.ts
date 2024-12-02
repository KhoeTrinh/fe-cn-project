import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import axios from 'axios'

@Injectable({
  providedIn: 'root',
})
export class ApiFetchingService {
  private readonly url = 'http://localhost:3001/';
  constructor() {}
  async getImageInfo(data: any) {
    const payload = {
      images: [data]
    }
    // const res = await axios.post(this.url, payload);
    // return res.data
    return new Promise<any>((resolve) => {
      timer(3000).subscribe(() => {
        const fakeResponse = {
          success: true,
          message: 'Fake image info returned',
          data: payload,
        };
        resolve(fakeResponse);
      });
    });
  }
}

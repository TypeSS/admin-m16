import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private url = "http://localhost:3000/"
  constructor() { }
  
  getUrl(cmd: string ){
    return this.url+cmd;
  }
}

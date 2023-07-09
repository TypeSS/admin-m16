import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private url = "https://deliciasportugal-apim.azure-api.net/"
  constructor() { }

  getUrl(cmd: string ){
    return this.url+cmd;
  }
}

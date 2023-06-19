import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getLogin(userinfo:object):Observable<any>{
    return this.http.post<any>(this.urlService.getUrl("adminlogin"), userinfo)
  }
}

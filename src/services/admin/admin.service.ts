import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Func } from 'src/models/restaurante/restaurante';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getAdmin():Observable<Func[]>{
    return this.http.get<Func[]>(this.urlService.getUrl('admin'))
  }

  updateAdmin(info:Func):Observable<Func>{
    return this.http.put<Func>(this.urlService.getUrl("admin"), info)
  }

  deleteAdmin(id:number):Observable<any>{
    return this.http.delete<any>(this.urlService.getUrl('admin/'+id))
  }
}

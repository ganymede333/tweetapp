import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  target: string = '';

  constructor(
    private _http: HttpClient,
  ) { }

  postTweet(tweet: any): Observable<HttpResponseBase> {
    return this._http.post(`${api.route}/${this.target}`, tweet, { observe: 'response' });
  }
}

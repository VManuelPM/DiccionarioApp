import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getWord(language: string, word: string){
    return this.http.get(`${this.baseUrl}/${language}/${word}`);
  }
}

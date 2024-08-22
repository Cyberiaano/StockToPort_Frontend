import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:8080/ask';

  constructor(private http: HttpClient) {}

  getAnswer(question: string): Observable<string> {
    return this.http.get(`${this.apiUrl}?question=${encodeURIComponent(question)}`, { responseType: 'text' }).pipe(
      map(response => {
        // Parsing the text response if necessary
        try {
          const parsedResponse = JSON.parse(response);
          return parsedResponse.text || parsedResponse;
        } catch {
          return response;
        }
      })
    );
  }
}

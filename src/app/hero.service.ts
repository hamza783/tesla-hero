import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private signInMessage = new Subject<string>();

  constructor() { }
  /*
   * @return {Observable<string>} : siblingMsg
   */
  public getMessage(): Observable<string> {
    return this.signInMessage.asObservable();
  }
  /*
   * @param {string} message : siblingMsg
   */
  public updateMessage(message: string): void {
    this.signInMessage.next(message);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationStateService {
  public textContainerAnimated = false;
  public imgDentistaAnimated = false;
  public section2Animated = false;
  constructor() { }
}

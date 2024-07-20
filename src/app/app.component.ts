import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(['/']);
  }
  ngOninit(){

  }

  ngAfterViewInit() {

  }

  ngOnDestroy() {

  }

}

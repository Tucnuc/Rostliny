import { Component, OnInit, Inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, TestPageComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'Biology';

  constructor(private sharedService: SharedService) {
    this.sharedService.onButtonClick.subscribe(() => {
      this.doingFlashcards = true;
    });
  }

  doingFlashcards: boolean = false;

  ngOnInit(): void { }
}
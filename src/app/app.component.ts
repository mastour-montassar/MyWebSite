import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    AboutComponent,
    PortfolioComponent,
    ActivitiesComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'MyPersonalWebsite';

  // Control visibility of each section
  showAbout = false;
  showPortfolio = false;
  showActivities = false;
  showContact = false;
  showFooter = false;

  ngAfterViewInit() {
    setTimeout(() => this.showPortfolio = true, 1000);
    setTimeout(() => this.showActivities = true, 20000);
    setTimeout(() => this.showContact = true, 100);
    setTimeout(() => this.showFooter = true, 300);
  }
}

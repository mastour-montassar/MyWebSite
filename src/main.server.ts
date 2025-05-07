import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideClientHydration } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';

export default () =>
  bootstrapApplication(AppComponent, {
    providers: [provideServerRendering(), provideClientHydration()],
  });

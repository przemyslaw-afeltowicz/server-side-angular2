import { NgModule } from '@angular/core';

import { AboutModule } from './+about/about.module';
import { FilmsModule } from './+films/films.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    FilmsModule,
    AboutModule,
    AppRoutingModule
  ]


})
export class AppModule {
}

export { AppComponent } from './app.component';

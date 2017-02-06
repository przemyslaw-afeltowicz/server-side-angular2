import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  template: `
  <nav class="navbar navbar-toggleable-xl navbar-inverse bg-inverse">
  <div class="container">
    <a class="navbar-brand" routerLink="/">Baza filmowa</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a routerLink="/films" class="nav-link" routerLinkActive="active">Filmy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/about" routerLinkActive="active">O projekcie</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-outlet></router-outlet>

  `
})
export class AppComponent {
  title = 'ftw';
}

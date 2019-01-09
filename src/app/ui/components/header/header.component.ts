import { Component } from '@angular/core';

@Component({
  selector: 'nl-header',
  template: `
      <nav class="navbar navbar-dark navbar-expand bg-dark fixed-top">
          <a class="navbar-brand" routerLink="/">Newsline</a>
          <div class="collapse navbar-collapse">
              <div class="navbar-nav">
                  <a class="nav-item nav-link" routerLinkActive="active" routerLink="/" [routerLinkActiveOptions]="{ exact: true }">Home</a>
                  <a class="nav-item nav-link" routerLinkActive="active" routerLink="/about" [routerLinkActiveOptions]="{ exact: true }">About</a>
              </div>
          </div>
      </nav>
  `
})
export class HeaderComponent {}

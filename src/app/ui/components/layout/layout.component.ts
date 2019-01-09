import { Component } from '@angular/core';

@Component({
  selector: 'nl-layout',
  template: `
    <nl-header></nl-header>
    <div class="container my-5 py-5">
        <router-outlet></router-outlet>
    </div>
    <nl-footer></nl-footer>
  `,
  styles: []
})
export class LayoutComponent {}
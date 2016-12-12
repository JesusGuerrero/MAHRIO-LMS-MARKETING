import { Component } from '@angular/core';

import template from './core/layout/app.template.html';
// import style from './core/styles/core.scss';

@Component({
  selector: 'ng2-seed',
  //template: '<h1>{{title}}</h1>'
  template,
  // styles: [style],
})

export class NG2SeedComponent {
  title = 'Minimal NgModule';
}

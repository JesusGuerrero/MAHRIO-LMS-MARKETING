import 'babel-polyfill';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MarketingModule } from './app/marketing.module';

platformBrowserDynamic().bootstrapModule(MarketingModule);

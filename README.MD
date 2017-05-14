# angular-everlive

Angular wrapper for easy consumption of Telerik's everlive-sdk


## Usage

To install this library, run:

```bash
$ npm install angular-everlive --save
```

and then from your `AppModule`:

```typescript
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the AngularEverliveModule and EverliveConfig interface
import { AngularEverliveModule, EverliveConfig } from 'angular-everlive';

//Create EverliveConfig object
const everliveConfig : EverliveConfig  = {
  appId: "your-app-id",
  scheme: "https"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularEverliveModule.initialize(everliveConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Then in the constructors of your Component and Services you can receive an Everlive Singleton object.

```typescript
import { Component } from '@angular/core';
import { Everlive  } from 'angular-everlive';
import { Observable } from 'rxjs/Observable';
import "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private el: Everlive){
  }
}
```

## Forking this library / Cotributing / Development

This plugin was generated using a [yeoman generator] (https://github.com/jvandemo/generator-angular2-library)

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Ignacio Fuentes](mailto:ignaciofuentes@outlook.com)

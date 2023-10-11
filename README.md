# angularx flatpickr wrap

> This project is based on [`angularx-flatpickr`](https://github.com/mattlewis92/angularx-flatpickr), which combined with [`native-date-adapter`](https://www.npmjs.com/package/native-date-adapter), now it contains lunar and jalali calenders.

## Table of contents

- [angularx flatpickr wrap](#angularx-flatpickr-wrap)
  - [Table of contents](#table-of-contents)
  - [About](#about)
  - [Installation](#installation)
  - [Development](#development)
    - [Prepare your environment](#prepare-your-environment)
    - [Development server](#development-server)
    - [Testing](#testing)
    - [Release](#release)
  - [License](#license)

## About

An angular 14.0+ wrapper for flatpickr-wrap

## Installation

Install through npm:

```
npm install flatpickr-wrap angularx-flatpickr-wrap
```

Next, in your `angular.json` add `"node_modules/flatpickr-wrap/dist/flatpickr.css"` to the `styles` array of your application

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr-wrap';

@NgModule({
  imports: [FormsModule, FlatpickrModule.forRoot()],
})
export class MyModule {}
```

Finally use in one of your apps components:

```typescript
import { Component } from '@angular/core';

@Component({
  template: `
    <input
      type="text"
      mwlFlatpickr
      [(ngModel)]="selectedDate"
      [altInput]="true"
      [convertModelValue]="true"
    />
  `,
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/abolfathi-al/angularx-flatpickr-wrap/blob/main/projects/demo/app/demo.component.ts).

## Development

### Prepare your environment

- Install [Node.js (>=14.19.0 or >=16.9.0)](http://nodejs.org/)
- Install pnpm: `corepack enable`
- Install local dev dependencies: `pnpm install` while current directory is this repo

### Development server

Run `pnpm start` to start a development server on port 8000 with auto reload + tests.

### Testing

Run `pnpm test` to run tests once or `pnpm test:watch` to continually run tests.

### Release

```bash
pnpm run release
```

## License

MIT

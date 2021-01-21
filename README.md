useDoko
=======

A react hook to add the Doko meta tags to the document head.  
For more information regarding the Doko Protocol, see: https://github.com/anomaly/Doko

[![Version](https://img.shields.io/npm/v/@anomalyhq/use-doko.svg)](https://npmjs.org/package/@anomalyhq/use-doko)
[![Downloads/week](https://img.shields.io/npm/dw/@anomalyhq/use-doko.svg)](https://npmjs.org/package/@anomalyhq/use-doko)
[![License](https://img.shields.io/npm/l/@anomalyhq/use-doko.svg)](https://github.com/anomaly/use-doko/blob/master/package.json)

<!-- toc -->
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
<!-- tocstop -->

## Installation

This package is distributed via [npm](https://npmjs.org/package/@anomalyhq/use-doko).

You can install with npm
```bash
npm install --save @anomalyhq/use-doko
```
or with yarn
```bash
yarn add @anomalyhq/use-doko
```

## Usage

```js
import useDoko from '@anomalyhq/use-doko';

const App = () => {

  useDoko({
    env: 'production',
    title: 'useDoko',
    subtitle: 'A hook to provide Doko meta tags',
    facts: [
      {
        key: 'Host',
        value: 'Github'
      }
    ],
    report: 'http://github.com/anomaly/use-doko/issues/new'
  })

  return(
    ...
  )
}
export default App;
```

## License

Distributed under the Apache 2.0 License. See [LICENSE](./LICENSE) for further information.
useDoko
=======
The ReacfJS hook for adding Doko meta tags.

[![Version](https://img.shields.io/npm/v/@anomalyhq/use-doko.svg)](https://npmjs.org/package/@anomalyhq/use-doko)
[![Downloads/week](https://img.shields.io/npm/dw/@anomalyhq/use-doko.svg)](https://npmjs.org/package/@anomalyhq/use-doko)
[![License](https://img.shields.io/npm/l/@anomalyhq/use-doko.svg)](https://github.com/anomaly/use-doko/blob/master/package.json)


Doko provides a `meta` tag based standard for web applications to express useful information about the environment which assists developers and testers ensure they are assessing the right environment without having to make visual changes to the user interfaces.

In additional we provide browser plugins to overlay this information over a web interface.

This repository contains a source to a ReactJS hook that makes it easy to add the Doko meta tags to the document `<head>`.  

Head to the [main repository](https://github.com/anomaly/Doko) for information on the protocol, browser plugins and our roadmap.

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
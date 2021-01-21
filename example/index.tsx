import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useDoko from '../.';

const App = () => {
  useDoko({
    env: 'development',
    title: 'Doko Example',
    subtitle: 'Displays extension widget',
    facts: [
      {key: 'Server', value: 'test'}
    ],
    report: 'https://github.com/anomaly/use-doko/issues/new'
  })
  return (
    <div>
      Widget will show on this page if the browser extension is installed.
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import * as React          from 'react';
import * as ReactDOMServer from 'react-dom/server';
import NoScriptView        from '../../client/noscript';

export function renderOnServer(app) {
  app.get('/ns/', (req, res) => {
    res.send(ReactDOMServer.renderToStaticMarkup(
      <NoScriptView />
    ));
  });
}

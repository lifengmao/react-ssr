import React from 'react';
import { renderToString} from 'react-dom/server';
import { StaticRouter , Route} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {  Provider } from 'react-redux';
import { Helmet } from 'react-helmet';


export const render = ((req, store ,routes, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {
            renderRoutes(routes)
          }
        </div>
      </StaticRouter>
    </Provider>
  ));
  const helmet = Helmet.renderStatic();

  const cssStr = context.css.length > 0 ? context.css.join('\n') : ''
      return (
         `
        <html>
          <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            <style>${cssStr}</style>
          </head>
          <body>
            <div id="root">${content}</div>
            <script>
              window.context = {
                state: ${JSON.stringify(store.getState())}
              }
            </script>
            <script src="/index.js"></script>
          <body>
        </html>
      `
      )
})
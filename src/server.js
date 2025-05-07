const express = require('express');
const path = require('path');

function run() {
  const app = express();

  const DIST_FOLDER = path.join(process.cwd(), 'dist/my-personal-website/browser');
  const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/my-personal-website/server/main');
  const { ngExpressEngine } = require('@nguniversal/express-engine');
  const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

  app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)],
  }));

  app.set('view engine', 'html');
  app.set('views', DIST_FOLDER);

  // Static assets
  app.get('*.*', express.static(DIST_FOLDER, {
    maxAge: '1y'
  }));

  // All routes
  app.get('*', (req, res) => {
    res.render('index', { req });
  });

  const port = process.env.PORT || 4000;
  app.get('/', (req, res) => {
    res.send('Hello World js');
  });
  app.listen(port, () => {
    console.log(`Nodee server listening on http://localhost:${port}`);
  });
}

run();

const express = require('express');
const ejs = require('ejs');
const i18n = require('i18n');
const path = require('path');

const app = express();

// Configuration for views and EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configuration for i18n
i18n.configure({
  locales: ['en', 'es'],
  directory: path.join(__dirname, 'localization'),
  defaultLocale: 'en',
  cookie: 'locale'
});

app.use(i18n.init);

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { res: res });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

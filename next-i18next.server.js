const {NextI18NextInstance} = require('next-i18next');
const path = require('path');

module.exports = new NextI18NextInstance({
  localePath: path.resolve('./public/locales'),
  defaultNS: 'common',
});
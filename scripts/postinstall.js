#! /usr/bin/env node

const { copySync } = require('fs-extra');

const files = [
  copySync('node_modules/testpilot-ga/dist/index.js', 'src/vendor/testpilot-ga.js'),
  copySync('node_modules/quill/dist/quill.min.js', 'src/sidebar/vendor/quill.js'),
  copySync('node_modules/quill/dist/quill.snow.css', 'src/sidebar/vendor/quill.snow.css'),
  copySync('node_modules/quill/LICENSE', 'src/sidebar/vendor/quill.LICENSE'),
  copySync('node_modules/kinto-http/dist/kinto-http.min.js', 'src/vendor/kinto-http.js'),
  copySync('node_modules/kinto-http/LICENSE', 'src/vendor/kinto-http.LICENSE'),
  copySync('node_modules/jose-jwe-jws/dist/jose.min.js', 'src/vendor/jose.js'),
  copySync('node_modules/jose-jwe-jws/LICENSE', 'src/vendor/jose.LICENCE'),
  copySync('node_modules/fxa-crypto-relier/dist/fxa-crypto-relier/fxa-crypto-relier.js', 'src/vendor/fxa-crypto-relier/fxa-crypto-relier.js')
];

Promise.all(files).catch(err => {
  console.error(err);
  process.exit(1);
});
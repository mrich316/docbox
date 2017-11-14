var fs = require('fs');

/**
 * This file exports the content of your website, as a bunch of concatenated
 * Markdown files. By doing this explicitly, you can control the order
 * of content without any level of abstraction.
 *
 * Using the brfs module, fs.readFileSync calls in this file are translated
 * into strings of those files' content before the file is delivered to a
 * browser: the content is read ahead-of-time and included in bundle.js.
 */
module.exports =
  fs.readFileSync('./content/introduction.md', 'utf8') + '\n' +
  '# Topics\n' +
  fs.readFileSync('./content/topics.md', 'utf8') + '\n' +
  '# Services\n' +
  fs.readFileSync('./content/public_works.md', 'utf8') + '\n' +
  '# Layers\n' +
  fs.readFileSync('./content/layers.md', 'utf8') + '\n';

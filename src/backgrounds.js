// JQuery
var $ = require('../node_modules/jquery/dist/jquery.min');

var Backgrounds = {
  duration: 300,
  init: function () {
    let elements = $('[data-bg-url]');
    if (elements.length) {
      let properties;
      for (let element of elements) {
        properties = { background: "url('" + $(element).data('bg-url') + "')" };
        $(element).css(properties);
      }
    }
    elements = $('[data-bg-color]');
    if (elements.length) {
      let properties;
      for (let element of elements) {
        properties = { background: $(element).data('bg-color') };
        $(element).css(properties);
      }
    }
  }
}

module.exports = Backgrounds;
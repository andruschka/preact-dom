var h = require('preact').h
var domElements = [
  "section", "nav", "article", "aside", "h1", "h2", "h3", "h4", "h5", "h6", "header", "footer", "address", "main", "p", "hr", "pre", "blockquote", "ol", "ul", "li", "dl", "dt", "dd", "div", "a", "em", "strong", "small", "s", "cite", "q", "time", "code", "samp", "sub", "sup", "i", "b", "u", "mark", "span", "br", "wbr", "img", "embed", "iframe", "video", "audio", "source", "track", "canvas", "map", "area", "svg", "math", "table", "caption", "colgroup", "col", "tbody", "thead", "tfood", "tr", "td", "th",
  "form", "fieldset", "legend", "label", "input", "button", "select", "datalist", "optgroup", "option", "textarea", "progress", "meter"
]

preactDOM = {}

for (var i = domElements.length - 1; i >= 0; i--) {
  var el = domElements[i]
  preactDOM[el] = h.bind(h, el)
}

module.exports = preactDOM

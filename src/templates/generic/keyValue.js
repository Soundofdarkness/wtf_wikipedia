const i18n = require('../../data/i18n');
const is_infobox = new RegExp('^(subst.)?(' + i18n.infoboxes.join('|') + ')[: \n]', 'i');
const is_citation = new RegExp('^(cite |citation)', 'i');
const keyValue = require('../parsers/key-value');

const infoboxType = function(name) {
  const reg = new RegExp('^(subst.)?(' + i18n.infoboxes.join('|') + ') +?', 'i');
  name = name.replace(reg, '');
  return name.trim();
};

//try to parse unknown template as a {{name|key=val|key2=val2}} format
const doKeyValue = function(tmpl, name) {
  let data = keyValue(tmpl);
  //handle citation templates
  if (is_citation.test(name)) {
    let type = name.replace(/^cite +/, '').trim();
    return {
      template: 'citation',
      type: type,
      data: data
    };
  }
  //handle infoboxes
  if (is_infobox.test(name)) {
    return {
      template: 'infobox',
      type: infoboxType(name),
      data: data
    };
  }
  //generic response
  return {
    template: name,
    data: data
  };
};
module.exports = doKeyValue;

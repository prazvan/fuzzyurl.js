'use strict';

const defaultFuzzyurl = {
  protocol: null,
  username: null,
  password: null,
  hostname: null,
  port: null,
  path: null,
  query: null,
  fragment: null
};
const fields = Object.keys(defaultFuzzyurl);

/**
 * Creates a Fuzzyurl object with the given parameter values.  Valid
 * `params` keys are: `protocol`, `username`, `password`, `hostname`,
 * `port`, `path`, `query`, and `fragment`; all default to null.
 *
 * @param {object} params Parameter values.
 *
 */
function Fuzzyurl(params) {
  let ps = Object.assign({}, defaultFuzzyurl, params || {});
  for (var p in ps) {
    if (defaultFuzzyurl.hasOwnProperty(p)) this[p] = ps[p];
    else throw new Error(`Bad Fuzzyurl parameter: ${p}`);
  }
};

Fuzzyurl.prototype.equals = function (fu) {
  var equal = true;
  fields.forEach((f) => { if (this[f] != fu[f]) equal = false; });
  return equal;
};

module.exports = Fuzzyurl;
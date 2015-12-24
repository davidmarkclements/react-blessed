/**
 * React Blessed Classes Solving
 * ==============================
 *
 * Solving a component's classes to apply correct props to an element.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = solveClass;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _lodash = require('lodash');

/**
 * Solves the given props by applying classes.
 *
 * @param  {object}  props - The component's props.
 * @return {object}        - The solved props.
 */

function solveClass(props) {
  var classes = props['class'];

  var rest = _objectWithoutProperties(props, ['class']);

  // Coercing to array & compacting
  classes = (0, _lodash.compact)([].concat(classes));

  return _lodash.merge.apply(null, [{}].concat(classes).concat(rest));
}

module.exports = exports['default'];
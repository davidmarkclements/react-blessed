/**
 * React Blessed Dependency Injection
 * ===================================
 *
 * Injecting the renderer's needed dependencies into React's internals.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = inject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactLibReactInjection = require('react/lib/ReactInjection');

var _reactLibReactInjection2 = _interopRequireDefault(_reactLibReactInjection);

var _reactLibReactComponentEnvironment = require('react/lib/ReactComponentEnvironment');

var _reactLibReactComponentEnvironment2 = _interopRequireDefault(_reactLibReactComponentEnvironment);

var _ReactBlessedReconcileTransaction = require('./ReactBlessedReconcileTransaction');

var _ReactBlessedReconcileTransaction2 = _interopRequireDefault(_ReactBlessedReconcileTransaction);

var _ReactBlessedComponent = require('./ReactBlessedComponent');

var _ReactBlessedComponent2 = _interopRequireDefault(_ReactBlessedComponent);

function inject() {

  _reactLibReactInjection2['default'].NativeComponent.injectGenericComponentClass(_ReactBlessedComponent2['default']);

  _reactLibReactInjection2['default'].Updates.injectReconcileTransaction(_ReactBlessedReconcileTransaction2['default']);

  _reactLibReactInjection2['default'].EmptyComponent.injectEmptyComponent('element');

  // NOTE: we're monkeypatching ReactComponentEnvironment because
  // ReactInjection.Component.injectEnvironment() currently throws,
  // as it's already injected by ReactDOM for backward compat in 0.14 betas.
  // Read more: https://github.com/Yomguithereal/react-blessed/issues/5
  _reactLibReactComponentEnvironment2['default'].processChildrenUpdates = function () {};
  _reactLibReactComponentEnvironment2['default'].replaceNodeWithMarkupByID = function () {};
}

module.exports = exports['default'];
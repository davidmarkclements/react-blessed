/**
 * React Blessed Specific React Transaction
 * =========================================
 *
 * React custom reconcile transaction injected by the renderer to enable
 * updates.
 *
 * NOTE: This looks more like a shim than the proper thing actually.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactLibCallbackQueue = require('react/lib/CallbackQueue');

var _reactLibCallbackQueue2 = _interopRequireDefault(_reactLibCallbackQueue);

var _reactLibPooledClass = require('react/lib/PooledClass');

var _reactLibPooledClass2 = _interopRequireDefault(_reactLibPooledClass);

var _reactLibTransaction = require('react/lib/Transaction');

var _reactLibTransaction2 = _interopRequireDefault(_reactLibTransaction);

var _lodash = require('lodash');

var ON_BLESSED_READY_QUEUEING = {
  initialize: function initialize() {
    this.reactMountReady.reset();
  },
  close: function close() {
    this.reactMountReady.notifyAll();
  }
};

function ReactBlessedReconcileTransaction() {
  this.reinitializeTransaction();
  this.reactMountReady = _reactLibCallbackQueue2['default'].getPooled(null);
}

var Mixin = {
  getTransactionWrappers: function getTransactionWrappers() {
    return [ON_BLESSED_READY_QUEUEING];
  },
  getReactMountReady: function getReactMountReady() {
    return this.reactMountReady;
  },
  destructor: function destructor() {
    _reactLibCallbackQueue2['default'].release(this.reactMountReady);
    this.reactMountReady = null;
  }
};

(0, _lodash.extend)(ReactBlessedReconcileTransaction.prototype, _reactLibTransaction2['default'].Mixin, Mixin);

_reactLibPooledClass2['default'].addPoolingTo(ReactBlessedReconcileTransaction);

exports['default'] = ReactBlessedReconcileTransaction;
module.exports = exports['default'];
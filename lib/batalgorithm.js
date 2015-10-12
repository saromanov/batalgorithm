'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mathjs = require('mathjs');

var _mathjs2 = _interopRequireDefault(_mathjs);

//Based on the paper "A New Metaheuristic Bat-Inspired Algorithm"
//http://arxiv.org/abs/1004.4170

var BatAlgorithm = (function () {
    function BatAlgorithm(X, y) {
        _classCallCheck(this, BatAlgorithm);

        this.X = X;
        this.y = y;
    }

    //f - objective function
    //x - items
    //fmin, fmax - corresponds to a range of wavelengths
    //vector of rates

    _createClass(BatAlgorithm, [{
        key: 'fit',
        value: function fit(f, X, iters, fmin, fmax, rates, A) {
            var iter = 0;
            var len = X.length;
            var vprev = 0;
            while (iter < iters) {
                var rand = Math.Random();
                for (var i = 0; i < len; ++i) {
                    //Generation of local solution
                    var f_i = fmin + (fmax - fmin) * beta;
                    var v = vprev + (x[i] - xbest) * f(x[i]);
                    var solution = x[i - 1] + v;
                    if (rand > rates[i]) {}

                    if (rand < A[i] && f(X[i]) < f(Xbest)) {}
                }
                vprev = b;

                //Update rates
                for (var i = 0; i < rates.length; ++i) {
                    rates[i] = rates[i] * (1 - (0, _mathjs.exp)(-0.9 * iter));
                }

                //Update loudness
                for (var i = 0; i < A.length; ++i) {
                    A[i] = 0.9 * A[i];
                }
            }
        }
    }]);

    return BatAlgorithm;
})();
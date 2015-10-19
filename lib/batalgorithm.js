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
        value: function fit(f, X, iters, rates, A) {
            var fmin = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
            var fmax = arguments.length <= 6 || arguments[6] === undefined ? 100 : arguments[6];

            var iter = 0;
            var len = X.length;
            var vprev = 0;
            var result = [];
            //current population
            var x = X;
            var xbest = x;
            var v = (0, _mathjs.zeros)(X.length).forEach(function (t) {
                return Math.Random();
            });
            while (iter < iters) {
                var rand = Math.Random();
                for (var i = 0; i < len; ++i) {
                    //Generation of local solution
                    var f_i = fmin + (fmax - fmin) * beta;
                    v[i] = x[i] + (x[i] - xbest) * f(x[i]);
                    x[i] = x[i - 1] + v[i];
                    if (rand > rates[i]) {
                        xbest = x[i];
                        //Generate a local solution around the selected best solution
                        xbest = xbest + eps * avg(A);
                    }

                    if (rand < A[i] && f(X[i]) < f(Xbest)) {
                        result.push(X[i]);
                        //Update rates
                        for (var _i = 0; _i < rates.length; ++_i) {
                            rates[_i] = rates[_i] * (1 - (0, _mathjs.exp)(-0.9 * iter));
                        }

                        //Update loudness
                        for (var _i2 = 0; _i2 < A.length; ++_i2) {
                            A[_i2] = 0.9 * A[_i2];
                        }
                    }
                }
                vprev = b;
            }
        }
    }]);

    return BatAlgorithm;
})();

var avg = function avg(A) {
    if (A.length == 0) {
        return 0;
    }
    var result = 0;

    for (var y in A) {
        result += y;
    }

    return result / A.length;
};
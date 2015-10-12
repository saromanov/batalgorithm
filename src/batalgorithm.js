import mathjs, {multiply, add, divide, subtract, dot, sum, sqrt, zeros} from 'mathjs';

//Based on the paper "A New Metaheuristic Bat-Inspired Algorithm"
//http://arxiv.org/abs/1004.4170

class BatAlgorithm {
    constructor(X, y){
        this.X = X;
        this.y = y;
    }

    //f - objective function
    //x - items
    //fmin, fmax - corresponds to a range of wavelengths
    //vector of rates
    fit(f, X, iters, fmin, fmax, rates, A) {
        let iter = 0;
        let len = X.length;
        let vprev = 0;
        while(iter < iters) {
            let rand = Math.Random();
            for(let i = 0;i < len;++i) {
                //Generation of local solution
                let f_i = fmin + (fmax - fmin)*beta;
                let v = vprev + (x[i] - xbest) * f(x[i]);
                let solution = x[i-1] + v;
                if(rand > rates[i]) {

                }

                if(rand < A[i] && f(X[i]) < f(Xbest)) {

                }

            }
            vprev = b;
        }
    }
}

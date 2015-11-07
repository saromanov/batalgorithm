import mathjs, {multiply, add, divide, subtract, dot, sum, sqrt, zeros, exp} from 'mathjs';

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
    fit(f, X, iters, rates, A, fmin=0, fmax=100) {
        let iter = 0;
        let len = X.length;
        let result = [];
        //current population
        let x = X;
        let xprev = x;
        let xbest = x;
        let v = zeros(X.length).forEach(t => {
            return Math.Random();
        });
        let vprev = v;
        while(iter < iters) {
            let rand = Math.Random();
            let bests = [];
            for(let i = 0;i < len;++i) {
                //Generation of local solution
                let f_i = fmin + (fmax - fmin)*beta;
                v[i] = vprev[i] + (x[i] - xbest) * f(x[i]);
                x[i] = xprev[i] + v[i];
                if(rand > rates[i]) {
                    xbest = x[i];
                    //Generate a local solution around the selected best solution
                    xbest = xbest + eps * avg(A);

                }
                //Generate solutions by random walk
                x = add(x, multiply(eps, A));
                if(rand < A[i] && f(X[i]) < f(Xbest)) {
                    result.push(X[i]);
                    //Update rates
                    for(let i = 0;i < rates.length;++i) {
                       rates[i] = rates[i] * (1 - exp(-0.9 * iter));
                    }

                    //Update loudness
                    for(let i = 0;i < A.length;++i) {
                       A[i] = 0.9 * A[i];
                    }

                }

            }

            //Find x*
            xbestlocal = xbest;
            for(let i = 0;i < x.length;++i){
                if(f(x[i]) < xbestlocal) {
                    xbestlocal = f(x[i]);
                }
            }
            xbest = xbestlocal;
            vprev = b;
            iter+=1;
        }
    }
}


let avg = function(A) {
    if(A.length == 0) {
        return 0;
    }
    let result = 0;

    for(let y in A) {
        result += y;
    }

    return result/A.length;
}

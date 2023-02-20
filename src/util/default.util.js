import lodash from "lodash";

/**
 * Check whether a function is generator.
 *
 * @param  {Function} fn
 * @return {Boolean}
 */
export function isGeneratorFunction(fn) {
    return typeof fn === 'function' &&
        fn.constructor &&
        fn.constructor.name === 'GeneratorFunction'
}

/**
 * Parase express middleware to koa middleware
 * @param fn
 * @returns {Function}
 */
export function expressMiddlewareToKoaMiddleware(fn) {
    return function (ctx, next) {
        return new Promise((resolve, reject) => {
            if (fn.length < 3) {
                fn()(ctx.req, ctx.res, err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(next());
                    }
                })
            } else {
                fn(ctx.req, ctx.res, err => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(next());
                    }
                })
            }
        })
    }
}
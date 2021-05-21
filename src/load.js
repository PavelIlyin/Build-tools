
let modules = {},
    pendingModules = {};

function defer() {
    let result = {};
    result.promise = new Promise(function(resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
    });
    return result;
}

function loadScript(name, path) {
    let deferred = defer();
    let element = document.createElement("script");
    deferred.path = path.concat(name);
    pendingModules[name] = deferred;
    element.onerror = deferred.reject;
    element.async = true;
    element.src = './' + name + '.js';
    document.body.appendChild(element);
    return deferred.promise;
}

async function _require(deps, factory, path) {
    const modules = await Promise.all(deps.map(function (dependency) {
        if (path.indexOf(dependency) > -1) {
            return Promise.reject(new Error('Circular dependency: ' + path.concat(dependency).join(' -> ')));
        }
        if (!modules[dependency]) {
            modules[dependency] = loadScript(dependency, path);
        }
        return modules[dependency];
    }));
    return factory.apply(null, modules);
}

function require(deps, factory) {
    return _require(deps, factory, []);
}

function define(name, deps, factory) {
    if(!Array.isArray(deps)) {
        factory = deps;
        deps = [];
    }
    let modulePromise = pendingModules[name],
        module = _require(deps, factory, modulePromise ? modulePromise.path : []);
    if(modulePromise) {
        modulePromise.resolve(module);
        delete pendingModules[name];
    } else {
        modules[name] = module;
    }
}
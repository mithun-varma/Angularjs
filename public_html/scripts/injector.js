/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function BigRedButton() {
}

function launchRocket() {
    console.log('Launching rocket at ' + new Date);
}

BigRedButton.prototype.openLid = function () {
      this._open = true;
};
BigRedButton.prototype.closeLid = function () {
      this._open = false;
};

BigRedButton.prototype.push = function () {
      if (this._open) {
            launchRocket();
      }
};

function spaceProgram(button) {
    button.openLid();
    button.push();
    button.closeLid();
}



function createInjector() {

    var instanceCache = {};
    var providerCache = {};

    function constant(name, value) {
        instanceCache[name] = value;
    }

    function factory(name, factoryFn) {
        providerCache[name] = factoryFn;
    }

    function service(name, Constructor) {
        factory(name, function () {
            var instance = Object.create(Constructor.prototype);
            invoke(Constructor, instance);
            return instance;
        });
    }

    function invoke(fn, self) {
        console.log(fn.toString())
        var argsString = fn.toString()
                .match(/^function\s*[^\(]*\(([^\)]*)\)/)[1];
        var argNames = argsString.split(',').map(function (argName) {
            return argName.replace(/\s*/g, '');
        });
        var args = argNames.map(function (argName) {
            if (instanceCache.hasOwnProperty(argName)) {
                return instanceCache[argName];
            } else if (providerCache.hasOwnProperty(argName)) {
                var provider = providerCache[argName];
                var instance = invoke(provider);
                instanceCache[argName] = instance;
                return instance;
            }
        });
        return fn.apply(self, args);
    }

    return {
        constant: constant,
        factory: factory,
        service: service,
        invoke: invoke
    };
}
;

var injector = createInjector();
//injector.constant('button', new BigRedButton(launchRocket));
console.log(BigRedButton)
console.log(BigRedButton.prototype)
injector.service('button',BigRedButton)
injector.invoke(spaceProgram);

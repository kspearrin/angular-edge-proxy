var myService = new MyService();
var myProxyi18nService = new MyProxyi18nService();
var myFunctioni18nService = new MyFunctioni18nService();

function MyService() {
    MyService.prototype.foo = function () {
        return 'bar';
    };
};

function MyProxyi18nService() {
    return new Proxy({}, {
        get: function (target, name) {
            return chrome.i18n.getMessage(name);
        },
        set: function (target, name, value) {
            throw 'set not allowed for i18n';
        }
    });
};

function MyFunctioni18nService() {
    MyFunctioni18nService.prototype.get = function (name) {
        return chrome.i18n.getMessage(name);
    };
};


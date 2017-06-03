var myService = new MyService();
var myi18nService = new Myi18nService();

function MyService() {
    MyService.prototype.foo = function () {
        return 'bar';
    };
};

function Myi18nService() {
    return new Proxy({}, {
        get: function (target, name) {
            return chrome.i18n.getMessage(name);
        },
        set: function (target, name, value) {
            throw 'set not allowed for i18n';
        }
    });
};

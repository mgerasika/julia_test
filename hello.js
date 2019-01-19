var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello ts");
var assert = /** @class */ (function () {
    function assert() {
    }
    assert.isTrue = function (exp) {
    };
    assert.prototype.dom = function () {
    };
    return assert;
}());
var a = new assert();
a.dom();
var base = /** @class */ (function () {
    function base() {
    }
    return base;
}());
var hello = /** @class */ (function (_super) {
    __extends(hello, _super);
    function hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    hello.prototype.helloWorld = function () {
        return "hello world";
    };
    return hello;
}(base));
function register(x) {
    assert.isTrue(true);
    console.log("register " + x.name);
    var proto = Object.getPrototypeOf(x);
}
var z = {};
z.helloWorld();
var z1 = new hello();
z1.helloWorld();
var z2 = {};
z2.helloWorld();
var z3 = {};
register(hello);
function sum(a, b) {
    return a + b;
}
function getCounter() {
    var res = function (start) { };
    res.interval = 123;
    res.reset2 = function () { };
    return res;
}
var obj = getCounter();
obj(10);
obj.reset2();
obj.interval = 5.0;
var Card = /** @class */ (function () {
    function Card() {
    }
    return Card;
}());
var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype.subscribe = function (fn) {
    };
    Demo2.prototype.createCardPicker = function () {
        return function () { return new Card(); };
    };
    return Demo2;
}());
var m = {};
var x = m.cards;
var c = m.createCardPicker();
m.subscribe(function (ev) {
    debugger;
    return 1;
});
c();

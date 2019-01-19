console.log("hello ts");

class assert {
    static isTrue(exp:boolean) {

    }

    dom()
    {
    
    }
}

let a:assert = new assert();
a.dom();

class base{

}

 class hello extends base {
    
    public helloWorld() : string {
        return "hello world";
    }
}

function register(x){
    assert.isTrue(true);
    console.log("register " + x.name);
    var proto = Object.getPrototypeOf(x);
}

var z = <hello>{};
z.helloWorld();
var z1:hello = new hello();
z1.helloWorld();
var z2:hello = {} as hello;
z2.helloWorld();
var z3 = {};

register(hello);

//demo
interface ICounter {
    (start: number): string;
    interval: number;
    reset2(): void;
}
interface isum{
    (a:number,b:number):number
}
function sum(a:number,b:number):number{
return a+b;
}
interface IConstructor{

}
function getCounter(): ICounter {
    let res = <ICounter>function (start: number) { };
    res.interval = 123;
    res.reset2 = function () { };
    return res;
}

let obj = getCounter();
obj(10);
obj.reset2();
obj.interval = 5.0;

interface ICard {
    suit: string;
    card: number;
}

class Card implements ICard{
    suit: string;    card: number;


}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => ICard;
    subscribe(fn:(ev:string)=>void)
}

class Demo2 implements Deck{
    subscribe(fn: (ev:string) => void) {
        
    }
    suits: string[];    cards: number[];
    createCardPicker(this: Deck): () => ICard {
        return () => new Card();
    }
 

}
var m = <Deck>{};
let x = m.cards;
let c:()=>ICard = m.createCardPicker();
m.subscribe((ev:string)=>{
debugger;
return 1;
});
c();
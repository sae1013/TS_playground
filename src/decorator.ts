//코드 평가과정에서 데코레이터를 최상단으로 끌어올린다.

function Logger(logTitle:string) {
    console.log('LoggerFactory()')

    return (constructor:Function) => {
        console.log(logTitle,constructor)
    }
}

function DomControl(id:string) {

    return (constructor:any) => {
        const domEle = document.querySelector('#root');
        const instance = new constructor();
        if(domEle){
            domEle.innerHTML = instance.name
        }
    }
}

@Logger('LOG:')
@DomControl('root')
class Person {
    name="Decorator로 생성한 텍스트 입니다.";
    age = 16;
    constructor() {

    }
}


function Log(target:any,propertyName:string){
    console.log('Property Decorator')
    console.log(target,propertyName)
}

class Product {
    @Log
    title:string;
    private _price:number;

    constructor(title:string,price:number) {
        this.title =title
        this._price = price
    }

    set price(val:number) {
        if(val>0) this._price = val;
        throw new Error('invalid Price');
    }
}
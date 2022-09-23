//코드 평가과정에서 데코레이터를 최상단으로 끌어올린다.
console.log('mainThread 시작')
function Logger(logTitle:string) {
    console.log('LoggerFactory()')

    return (constructor:Person) => {
        console.log(logTitle,constructor)
    }
}

function Logger2(logTitle:string) {
    console.log('LoggerFactory2()')

    return (constructor:Person) => {
        console.log(logTitle,constructor)
    }
}

@Logger('LOG:')
@Logger2('LOG2:')
class Person {
    name="jmw93";
    constructor() {
        console.log('constructor()');
    }
}
console.log('mainThred 끝')

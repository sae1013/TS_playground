
function Logger(logTitle:string) {
    console.log('LoggerFactory()')

    return (constructor:Person) => {
        console.log(logTitle,)
        console.log(logTitle,constructor)
    }
}

@Logger('LOG:')
class Person {
    name="jmw93";
    constructor() {
        console.log('constructor()');
    }
}
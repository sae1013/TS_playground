```ts
function merge<T extends Object, U extends Object>(objA:T,objB:U) {
    return Object.assign(objA,objB)
}

merge({name:'Max'},{hobby:'soccer'}).hobby;

const my = <T,>(a:T) => { //arrowFunction 에서 제네릭 쓰려면 extends로 컴파일러에게 알리거나, 콤마 찍어서 알려야함
    return a
}



function countAndPrint<T extends {length:number}>(element:T):[T,string]{
    let description = 'Got no value';
    if(description.length > 0) {
        description = 'Got' + element.length + 'elements';
    }
    return [element,description]
}

// key of 사용하기
function extractAndConvert<T extends Object, U>(obj:T, key:keyof T) {
    return obj[key]
}

extractAndConvert({name:'정민우'},'name')

class DataStorage<T extends string> {
    private data:T[] = [];   

    addItem(item:T) {
        this.data.push(item)
    }
    removeItem(item:T) {
        // this.data = this.data.filter((storedData) => storedData != item )
        const findIndex = this.data.indexOf(item)
        if(findIndex !== -1){
            this.data.splice(findIndex,1)
        }
        
    }
    getItems() {
        return [...this.data]
    }
    
}

const storage = new DataStorage<string>();
storage.addItem('hello')
storage.addItem('bye')
storage.removeItem('hello')
console.log(storage.getItems())

interface CourseGoal {
    title: string;
    description:string;

}

const obj:Partial<CourseGoal> = {

} 
obj.title = 'he'
obj.description = 'title'
 // CourseGoal 인터페이스의 프로퍼티를 옵셔널로 바꿔준다.
 

//readonly
const names:Readonly<string[]> = ['jmw93','soccer']
names.push('Mani')
names.pop()

// 제네릭 vs 유니언 -> 제네릭을 사용하면, 클래스를 사용할때 타입을 정하겠다 인데, 즉 타입의 고정인데.. 유니언은 그 일관성이 깨진다. 즉, 유니언의 타입중에 하나만 만족되면 되므로, 여전히 버그가 발생할 수 있다.
// 타입가드 -> 특정 속성이나 메소드에 접근할 때, 해당 프로퍼티가 존재하는지 확인하는지 확인하고 접근하는 방식
```

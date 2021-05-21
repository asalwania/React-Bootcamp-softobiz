const names:Array<string> = ['Ajay',"Ankush"]

const promise:Promise<string> = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('This is done!')
    },2000)
})

// promise.then(data=> console.log(data))

// create own generic types

function merge<T,U>(objA:T,objB:U){
    return Object.assign(objA,objB)
}
const mergeObj = merge({name:'Ajay'},{age:29})
// console.log(mergeObj)

// working with constrains
// we can extend objects in generic type so that we can make sure that we can pass only objects
function merge2<T extends object, U extends object>(objA: T, objB: U) {  
  return Object.assign(objA, objB);
}
const mergeObj2 = merge({ name: "Ajay" }, { age: 29 });


// Generic classes
class DataStorage<T>{
    private data:T[]=[]

    addItem(item:T){
        this.data.push(item)
    }

    removeItem(item:T){
        this.data.splice(this.data.indexOf(item),1)
    }

    getItems(){
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>() // providing string to generic type
// now i can add only string to the storage 
textStorage.addItem("Ajay");
textStorage.addItem('Amit')
textStorage.removeItem('Ajay')
console.log(textStorage.getItems())



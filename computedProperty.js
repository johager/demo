//
// Demo for when and why to use a computed property in an object
//

// set up a Person class to store firstName and lastName

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

// to console.log a person's name, you could do this

const person = new Person('James','Hager')
const {firstName, lastName} = person
console.log("name from deconstruction:", firstName, lastName)

//
// if you are going to be using a person's full name a lot, you can make a computed property
//

class Person1 extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName)
        this.lovesToCode = false
    }

    // computed property "name"
    get name() {
        return this.firstName + " " + lastName
    }

    logName() {
        console.log("logName():", this.name)
    }

    setLovesToCode(lovesToCode) {
        this.lovesToCode = lovesToCode
    }

    nameFor(dayNight){
        if (dayNight === 'night' && this.lovesToCode) {
            return "Super Coder"
        } else {
            return this.name
        }
    }
}

const person1 = new Person1('James','Hager')

// computed properties are generally used to provide information about the state of the object

let person1Name = person1.name
console.log("name from computed property:", person1.name)  // logged just to show output

// methods are generally used
//   - to perform an action, or
//   - when additional information is required to complete the action

// for the method logName(), the action is doing the console.log
person1.logName()

// for the method setLovesToCode(lovesToCode), the action is changing the state of the object
person1.setLovesToCode(true)

// for the method nameFor(dayNight), the argument dayNight is required to control what is returned
person1Name = person1.nameFor('day') 
console.log("name from nameFor('day'):", person1Name)  // logged just to show output

person1Name = person1.nameFor('night') 
console.log("name from nameFor('night'):", person1Name)  // logged just to show output
//fluent
function fluent(fn) {
	return function (...args) {
		fn.apply(this, args)
		return this
	}
}

//ES5
function PersonES5() {

   this.sayName = fluent(function() {
    console.log(this.name, this.surname)
  })

   this.setName = fluent(function(name, surname) {
    this.name = name
    this.surname = surname
  })

}

const pES5 = new PersonES5
pES5.setName('Jane', 'Doe').sayName().setName('John', 'Doe').sayName()

//THE SAME RESULT CAN BE ACHIEVED USING ES6 CLASSES AND ES7 FUNCTION DECORATORS
// the class operator is only syntactic sugar around the function


//target is the current this
//name is the name of the function that is going to be decorated
//descriptor is an object that contains the information and the actual function is in descriptor.value
//in this particular instance we are wrapping the descriptor.value(the original function) with another function
//that is actually our fluent interface.
//in fact we hold reference to it with the fn variable, so that it can be called inside fluent
//then we call it via apply, because we want the THIS
function decorate(target, name, descriptor) {
  console.log("target: ", target)
  console.log("name: ", name)
  console.log("descriptor: ", descriptor)
  const fn = descriptor.value
  descriptor.value = function(...args) {
    fn.apply(target, args)
    return target
  }
}

function decorateWith(decorator) {
  return (target, name, descriptor) => {
    descriptor.value = decorator.call(target, descriptor.value)
  }
}

//ES6
class Person {
  @decorate
  setName(first, last) {
    this.first = first
    this.last = last
  }
  sayName() {
    console.log(this.first, this.last)
  }
}


const person = new Person
// person.setName('Jane', 'ES6').sayName().setName('John', 'ES6').sayName()

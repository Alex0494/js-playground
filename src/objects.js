//THIS FIRST EXAMPLE CORRESPONDS TO THE BEST PRACTICE IN OBJECT DECLARATION IN ES5
function ClassicObject(x,y) {
  this.x = x
  this.y = y
}

ClassicObject.prototype.getX = function() {
  return this.x
}

ClassicObject.prototype.getY = function() {
  return this.y
}

ClassicObject.prototype.getSum = function() {
  return this.x + this.y
}

//the functions declared in the object's prototype can be inherited by objects created with the new operator

var o = new ClassicObject(1,2)

console.log(o.getX() + ', ' + o.getY() + ', ' + o.getSum())


//THIS CAN BE WRITTEN IN TWO MORE WAYS
function ContextObject(x,y) {
  this.x = x
  this.y = y

  this.getX = function() {
    return x
  }

  this.getY = function() {
    return y
  }
}
/*

EVEN THOUGH THE FUNCTIONALITY IS THE SAME, THERE IS A VERY IMPORTANT DIFFERENCE
REGARDING PERFORMACE AND MEMORY ALLOCATION WITH THIS SOLUTION

1 - We are not taking advantage of Prototypal Inharitance

    Presumably, in a real-world application, the contextObject will have some methods
    and we may want to share these methods with other objects that inherit from the contextObject

    Not putting these methods into the prototype will lead to having to declare them
    each time we create a new contextObject

*/

function ClosureObject(x,y) {
  this.x = x
  this.y = y
  return function() {
    return {
      getX: function() {
        return x
      },
      getY: function() {
        return y
      },
      getSum: function() {
        return x + y
      }
    }
  }()
}

/*
This solution provides ENCAPSULATION but:

 - Presents some problems regarding optimization (slower performances)
 - You cannot take advantage of prototypal inheritance

*/

// ES6 CLASSES

class ES6Object {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  getX() {
    return this.x
  }

  getY() {
    return this.y
  }

  getSum() {
    return this.x + this.y
  }

}

// this is only syntactic sugar around the standard prototype-based object declaration in ES5

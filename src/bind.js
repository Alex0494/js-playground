//Function.prototype.bind()

this.x = 9  //refers to the global "window" object in the browser

const module = {
  x: 81,
  getX: function() { return this.x }
}

module.getX() // 81

const retrieveX = module.getX

retrieveX() //return 9 - the function gets invoked at the global scope

//Create a new function with this bound to module
const boundGetX = retrieveX.bind(module)
boundGetX() // 81

/*
the bind method returns a new function that will always be called with a particular this

STACK OVERFLOW:
call and apply call a function while bind creates a function.
Though with call() you pass arguments individually and apply() as an argument array.

Use .bind() when you want that function to later be called with a certain context, useful in events.
Use .call() or .apply() when you want to invoke the funciton immediately, and modify the context.

Call/apply call the function immediately, whereas bind returns a function that when later executed will have the 
correct context set for calling the original function.
This way you can maintain context in async callbacks, and events.

*/

//exambple of native implementation of .bind()
Function.prototype.bindCustom = function(context) {
  var fn = this
  return function() {
    fn.apply(context, arguments)
  }
}

//BIND EXAMPLE ON events

function MyObject(element) {
    this.elm = element;

    element.addEventListener('click', this.onClick.bind(this), false);
};

MyObject.prototype.onClick = function(e) {
     var t=this;  //do something with [t]...
    //without bind the context of this function wouldn't be a MyObject
    //instance as you would normally expect.
};


/*

"I use it extensively in node.js for async callbacks that I want to pass a member method for,
but still want the context to be the instance that started the async action."

*/

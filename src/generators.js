const fs = require('fs')
const fetch = require('node-fetch')
/*
  GENERATORS ARE FUNCTIONS THAT CAN (yield) MULTIPLE VALUES
  The execution of a generator function can be "freezed"

  An Iterator is a generator consumer

  an iterator has a next() method that, when called, will resume the execution of the generator it derived from
  until it reaches the "next" yield statement
  next can be called with an argument, and this argument will be available in the generator function

  the state of the execution of the function will be saved into the iterator object, the generator was assigned to
*/
function* bearsGenerator() {
  var kind = yield 'Grizzly'
  yield `${kind} Polar`
  console.log(`kind: ${kind}`)
  return 'done'
}

bearsIterator = bearsGenerator()
console.log(bearsIterator.next().value, 'bear!') // 'Grizzly bear!'
console.log(bearsIterator.next('Ferocious').value, 'bear!') // 'Ferocious Polar bear!'


// GENERATOR CONSUMER --> PROMISE BASED (naive CO implementation) recursive*
function run(generator) {
  iterator = generator()
  function iterate(iteration) {
    if(iteration.done) return iteration.value
    const promise = iteration.value
    return promise.then( x => iterate(iterator.next(x))).catch( err =>  console.error(err.stack) )
  }
  return iterate(iterator.next())
}

run(function* () {
  const uri = 'http://jsonplaceholder.typicode.com/posts/1'
  const response = yield fetch(uri)
  const post = yield response.json()
  const title = post.title
  return title
}).then( result => console.log(`Run resulted in: ${result}`))

//With GENERATORS you ca write async code in a syncronous fashion

//GENERATOR CONSUMER CALLBACK BASED
function run2(generator) {
  var data = null, yielded = false
  var iterator = generator(function() {
    data = arguments
    check()
  })
  yielded = !!(iterator.next())
  check()

  function check() {
    while(data && yielded) {
      var err = data[0], item = data[1]
      data = null
      yielded = false
      if(err) return iterator.throw(err)
      yielded = !!(iterator.next(item))
    }
  }
}

run2(function* readFile(resume) {
  var file = yield fs.readFile('../files/bigfile.txt', 'utf8', resume)
  var uppercase = file.toUpperCase()
  yield fs.writeFile('../files/uppercase.txt', uppercase, resume)
  console.log('All done!')
})

/*
the yield operator will return the current value and freeze the function execution until the next() method is called
from the function that called the generator, and has access to the iterator
*/

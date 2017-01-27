// import fetch from 'node-fetch'
const fs = require('fs')
const fetch = require('node-fetch')

run2(function* readFile(resume) {
  var file = yield fs.readFile('../files/bigfile.txt', 'utf8', resume)
  var uppercase = file.toUpperCase()
  yield fs.writeFile('../files/uppercase.txt', uppercase, resume)
  console.log('All done!')
})

// GENERATOR CONDUMER --> PROMISE BASED (naive CO implementation)
function run(generator) {
  iterator = generator()
  function iterate(iteration) {
    if(iteration.done) return iteration.value
    const promise = iteration.value
    return promise.then( x => iterate(iterator.next(x))).catch( err =>  console.log(err) )
  }
  return iterate(iterator.next())
}

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

/*
the yield operator will return the current value and freeze the function execution until the next() method is called
from the function that called the generator, and has access to the iterator
*/

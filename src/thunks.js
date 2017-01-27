/*
THUNKS

Thunks are wrappers around a pre-computed value that you can bring around in the application
and each time you need this value, you call the thunk and get it out.

*/

function add(x,y) {
  return x + y
}

var thunk = function() {
  return add(10, 25)
}

var value = thunk() //25
/*
A Thunk is simply a function that has everything already in it that it needs to give you some value back
It is a function with some closured state keeping track of some value

THUNK itself is a container that i can pass around anywhere in my program
as a container wrapped around that state

I don't have to pass the state around, I just pass the thunk, and everytime i want to get this value back
i call the thunk for it

A WRAPPER AROUND A VALUE

ASYNCRONOUS THUNKS ARE THE SAME, except you need to pass to them a callback in order to get the value out
*/

functiond addAsync(x,y,cb) {
  setTimeout(() => {
    cb(x + y)
  }, 1000)
}

var thunk2 = function(cb) {
  addAsync(10,15, cb)
}

var value2 = thunk2(sum => return sum) //25

/*

Here's the catch:

from the outside world we don't need to care wether the value is gonna be available to us immediately
or if it's gonna take a while for it to be retreived

wrapping a thunk function around the state and allowing it to be asyncronous in nature we have factored
time out of the equation...
we have produced a wrapper around a value, that has become time independent

Time is the most complex factor of state in your program
Managing time is the most comolex task in programming


I HAVE THIS THUNK, IT REPRESENTS THE VALUE, WHENEVER I WANT THE VALUE I GIVE IT A CALLBACK AND I GET THAT VALUE out
AND THIS IS ALL I HAVE TO DO


A PROMISE IS A TIME INDEPENDENT WRAPPER AROUND A VALUE

so...thunks are promises without the fancy API

You can make yourself utilities to construct thunks

INVERSION OF CONTROL

*/

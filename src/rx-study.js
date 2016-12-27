import $ from 'jquery';
import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

console.log('RxJS Boiler Running...');

//observable sequensce from UI events
$("<button id='btn'>Click me!</button>").appendTo("body")
$("<input type='text' id='input' />").appendTo("body")
$("<div id='target'></div>").appendTo("body")

const btn = $("#btn")
const input1 = $("#input1")
const target = $("#target")

const btn$ = Rx.Observable.fromEvent(btn, 'click')
const input1$ = Rx.Observable.fromEvent(input, 'keyup')
//observables are lazy, so if we want to start using it, we have to subscribe to it

btn$.subscribe(
  e => {
    console.log('clicked!')
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log('completed!')
  }
)
input1$.subscribe(
  e => {
    target.html(e.target.value)
  },
  err => {
    console.log(err)
  },
  complete => {
    console.log('completed!')
  }
)

//OBSERBABLES FROM ARRAYS
const numbers = [22,34,56,77]

const posts = [
    { title: "Post One" , text: "HELLO ONE!!!"},
    { title: "Post Two" , text: "HELLO TWO!!!"},
    { title: "Post Three" , text: "HELLO THREE!!!"},
]

$("<div id='posts'></div>").appendTo("body")

const collection = $("#posts")

const posts$ = Rx.Observable.from(posts)

posts$.subscribe(
  post => {
    collection.append("<li><h3>"+post.title+"</h3><p>"+post.text+"</p></li>")
  },
  err => {
    console.log(err)
  },
  completed => {
    console.log('Completed!')
  }
)

//OBSERVABLES FROM SETS
const set = new Set(['Hello', 44, {title: 'My set!'}])

const set$ = Rx.Observable.from(set)
set$.subscribe(
  v => {
    console.log(v)
  },
  err => {
    console.log(err)
  },
  completed => {
    console.log('Completed!')
  }
)

//OBSERVABLE FROM MAP
const map = new Map([[1,2], [3,4], [5,6]])

const map$ = Rx.Observable.from(map)
map$.subscribe(
  v => {
    console.log(v)
  },
  err => {
    console.log(err)
  },
  completed => {
    console.log('Completed!')
  }
)

//OBSERVABLE FROM SCRATCH

const source$ = new Rx.Observable(observer => {
  console.log('Creating Observable')
  observer.next('Hello world')
  observer.next('Hello again')
  observer.next('Hello three times')

  //error
  observer.error(new Error('Error: Something went wrong!'))

  //stream demonstration
  setTimeout(() => {
    observer.next('Yet another hello!')
    observer.complete()
  }, 2000)
})

source$
.catch(err => Rx.Observable.of(err))
.subscribe(
  v => {
    console.log(v)
  },
  err => {
    console.log(err)
  },
  completed => {
    console.log('Completed!')
  }
)

//OBSERVABLE FROM PROMISE ...

//EXERCISE: From an input grab the username, avatar and public repos
import axios from 'axios'

function fetch(username) {
  console.log(`fetching ${username}`)
  axios
  .get(`https://api.github.com/users/${username}`)
  .then(data => {
    console.log('returning data ', data)
    return Promise.resolve(data)
  })
  .catch(err => err)
}

$("<h2 style='text-align: center'>EXERCISE</h2>").appendTo("body")
$("<p style='text-align: center'><input type='text' id='search' /></p>").appendTo("body")

const search$ =
Observable.fromEvent($("#search"), 'keyup')
.map(event => event.target.value)
.filter(val => val.length > 3)
.debounce(() => Observable.interval(600))
.flatMap(val => Observable.fromPromise(
  axios.get(`https://api.github.com/users/${val}`)
  .then(res => res.data)
))

search$.subscribe(
  data => {
    console.log(data)
    $(`<img src='${data.avatar_url}' style='text-align: center'></img>`).appendTo("body")
    $(`<div style='text-align: center'>${data.emal}</div>`).appendTo("body")
    $(`<div style='text-align: center'>${data.bio}</div>`).appendTo("body")
  }
)
// OPERATORS

import Rx from 'rxjs/Rx'
import { Observable } from 'rxjs/Rx'
import React from 'react'
import ReactDOM from "react-dom"
import axios from 'axios'

//CREATE OBSERVABLE FROM PROMISE
function data$(input) {
    return Observable.fromPromise(
      axios.get(`https://www.reddit.com/r/aww/search.json?q=${input}&restrict_sr=on`)
      .then(res => res)
    ).map(res => res.data.data.children)
}

//STUDY OPERATORS

const fetching$ = data$().map(() => False)

const engine$ = fetching$.merge(data$())

//what does it mean to be ISOMORPHIC?
// the code you wirite can run both on the client and on the server
// it can be of 2 types, AGNOSTIC or SHIMMED
//AGNOSTIC
// Doesn't depend on browser-specific properties(window) or server-specific properties(process.env, req.cookies)
//SHIMMED
// Provides shims for accessing environment-specific properties so module can expose a single API.
//ex. superagent shim library

class SearchEngine extends React.Component {

  constructor() {
    super()
    this.state = {
      input: "",
      data: []
    }
  }

  startStream(text) {
    console.log("starting stream with "+ text)
    data$(text)
    .subscribe(
      data => {
        this.setState({data: [...this.state.data, data]})
      },
      err => console.log(err),
      complete => console.log("complete!!")
    )
  }

  //@debounce @filter
  handleChange(e) {
      this.setState({input: e.target.value})
      if(e.target.value.length > 2) this.startStream(e.target.value)
  }

  render() {

    const pics = [].concat.apply([], this.state.data)
    const mappedPics = pics.map(pic => {
      console.log(pic)
      if(pic.data.url) {
        return (
            <span>
              <label for={pic.data.name}>{pic.data.title}</label>
              <img id={pic.data.id} name={pic.data.name} width="200" height="200"
              src={pic.data.url} alt=""/>
            </span>
          )
      }
    })
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange.bind(this)} type="text"/>
        <div>{mappedPics}</div>
      </div>
    )
  }

}

//STATE REPRESENTS THE COMPONENT'S state
//PROPS REPRESENT THE APPLICATION'S state AND ARE IMMUTABLE FROM INSIDE A COMPONENT

//IF YOU WANT YOUR COMPONENTS TO REFLECT YOUR APPLICATION'S state YOU NEED TO CREATE A STORE AND THEN
//INJECT IT INTO YOUR COMPONENTS AS PROPS

// REACT BEST PRACTICES TELLS YOU TO LIMIT THE USE OF STATE AND USE PROPS INSTEAD
// BECAUSE YOU MIGHT WANT OTHER COMPONENTS TO SHARE THE SAME DATA YOU ARE CREATING INSIDE THE COMPONENT

ReactDOM.render(
  <SearchEngine></SearchEngine>,
  document.getElementById("main")
)

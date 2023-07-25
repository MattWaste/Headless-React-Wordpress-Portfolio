
import Person from "./scripts/Person"
import ExampleReactComponent from "./scripts/ExampleReactComponent"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"

const person1 = new Person("Brad")
if (document.querySelector("#render-react-example-here")) {
  ReactDOM.render(<App/>, document.querySelector("#render-react-example-here"))
}

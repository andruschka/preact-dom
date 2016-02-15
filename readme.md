# preact-dom
A preact replacement for React.DOM   
## why
If you was using React with Coffeescript (without JSX), then you found it useful to do stuff like this:
```
{div, button} = React.DOM
App = (props)=>
  div {}, 
    "Hello, click this button:",
    button {}, "click me"
```
(You was able to write a clean and readable syntax in coffee (without the use of JSX).  
You couldn't do this with preact, as preact does not have the DOM Object.

## but now you can:
```
{h, render} = require 'preact'
{h1, div, button} = require 'preact-dom'
Note = (props)=> div {style: {backgroundColor: "red"}}, props.text
App = ()=>
  div {},
    # render components with h(component, {}, "children")
    h Note, {text: "YES BABY"}
    h1 {style: {backgroundColor: "yellow"}}, "AAAAAWWWW YEAAAHR!"
    button {}, "click me!"
```

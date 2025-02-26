import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'



function App() {
  // let count = 0

  let [count, setCount] = useState(0)


  function addCounter() {
    console.log("hello increment", count)
    setCount(count + 1)
  }
  function lessCounter() {
    console.log("hello decrement", count)
    setCount(count - 1)
  }
  function resetCounter(){
    setCount(count = 0)
    console.log("hello reset", count);
  }


  return (
    <React.Fragment>  {/* ese hum <> </> or <div></div> ese bhi likh sakhte han */}
      <h1>Hello World {count}</h1>
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nostrum quaerat facere velit vel, ex sed quod unde corporis adipisci ducimus officia, qui numquam hic architecto perferendis pariatur sequi cumque quos. Sunt distinctio incidunt consectetur dicta natus, ipsam optio veniam dolorem soluta, aliquid recusandae voluptate aliquam in eius consequuntur obcaecati dolor quo necessitatibus accusantium deleniti odit. Praesentium, temporibus. Dolorum accusantium blanditiis eum alias, deserunt illum corrupti exercitationem iusto accusamus quo eius minus sapiente quos sequi tempora, debitis molestiae distinctio optio error aliquam. Quam, facilis sint fugit earum, vero dolorem nulla iure ducimus doloremque, ex repudiandae reprehenderit et nam quaerat. Esse.</p> */}

      {/* <About/>
      <Contact/> */}

      <button onClick={addCounter}>+</button>
      <button onClick={lessCounter}>--</button>
      <button onClick={resetCounter}>Reset</button>

    </React.Fragment>
  )
}

export default App

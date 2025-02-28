import React, { useState } from 'react'
import About from './About'
import Contact from './Contact'
import './app.css'



// function App() {
//   // let count = 0

//   let [count, setCount] = useState(0)


//   function addCounter() {
//     console.log("hello increment", count)
//     setCount(count + 1)
//   }
//   function lessCounter() {
//     console.log("hello decrement", count)
//     count < 1 ? count = 0 :
//       setCount(count - 1)
//   }
//   function resetCounter() {
//     setCount(count = 0)
//     console.log("hello reset", count);
//   }


//   return (
//     <React.Fragment>  {/* ese hum <> </> or <div></div> ese bhi likh sakhte han */}
//       <h1>Counter App</h1> <br />
//       {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nostrum quaerat facere velit vel, ex sed quod unde corporis adipisci ducimus officia, qui numquam hic architecto perferendis pariatur sequi cumque quos. Sunt distinctio incidunt consectetur dicta natus, ipsam optio veniam dolorem soluta, aliquid recusandae voluptate aliquam in eius consequuntur obcaecati dolor quo necessitatibus accusantium deleniti odit. Praesentium, temporibus. Dolorum accusantium blanditiis eum alias, deserunt illum corrupti exercitationem iusto accusamus quo eius minus sapiente quos sequi tempora, debitis molestiae distinctio optio error aliquam. Quam, facilis sint fugit earum, vero dolorem nulla iure ducimus doloremque, ex repudiandae reprehenderit et nam quaerat. Esse.</p> */}

//       {/* <About/>
//       <Contact/> */}

//       <div id='div'>
//         <button onClick={addCounter}>+</button>
//         <p>{count}</p>
//         <button onClick={lessCounter}>--</button>
//         <button onClick={resetCounter}>Reset</button>
//       </div>

//     </React.Fragment>
//   )
// }

function App() {

  let [title, setTitle] = useState('')
  let [description, setDescription] = useState('')

  function addTodo(event) {
    event.preventDefault()
    console.log(title);
    console.log(description);
    setTitle('');
    setDescription('');
  }

  return (
    <>
      <h1>Todo App</h1>

      <form onSubmit={addTodo}>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter title' />
        <br /> <br />
        <input onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Enter description' />
        <br /><br />
        <button> Add Todo</button>
      </form>
    </>

  )
}

export default App


//! Topics Covered
// component
// usestate (Hook)  // use dikh jaye wo hook ha => hook react ke apne banaya hue function han
// styling in jsx
// React Fragments
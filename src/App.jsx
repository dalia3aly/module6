import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Greeting from './components/Greeting';
import ComplexComment from './components/ComplexComment';
import Comment from './components/Comment';
import BigCats from './components/BigCats';
import Emoji from './components/Emoji';
import Calculator from './components/Calculator';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <Emoji />

      {/* exercise 1 - page 32 */}
      <Greeting />
      <Greeting name = "Sara"/>      


      
      <ComplexComment author = {{name: "Dalia", avatarUrl: "https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg"}} text = "Hello there!" date = {new Date()}/>
      {/* Class exercise - page 40 */}
      <Comment author = {{name: "Dalia", avatarUrl: "https://www.svgrepo.com/show/382096/female-avatar-girl-face-woman-user.svg"}} text = "Hello there!" date = {new Date()}/>

      <a>
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      <BigCats />
      

      <img src="\images\Calculator.png" className="logo react" alt="React logo" />
      
      <Calculator />
    </>
  )
}

export default App

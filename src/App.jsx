import { useState } from 'react'
import {Counter2} from './BodyData'
import {Counter} from './BodyData'
import { UserInfo } from './BodyData'
import { UserProfile } from './BodyData'
import { TodoList } from './BodyData'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <Counter2 />
      <Counter />
      <UserInfo />
      <UserProfile />
      <TodoList />
    </>
  )
}

export default App

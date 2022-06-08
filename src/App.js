import React, { useEffect, useState } from 'react'
import List from './List'
function App() {
  const [people, setPeople] = useState([])
  useEffect(() => {
    //fetch data from api
    const fetchUsers=async()=>{
     await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPeople(data)
      })
    }
    fetchUsers()

  },[])
  return (
    <>
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>

    <h6 className='credits'> Made by Sameed (forked from repo by John Smilga)</h6>
    </>
  )
}

export default App

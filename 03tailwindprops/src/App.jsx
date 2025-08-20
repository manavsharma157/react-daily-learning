
import './App.css'
import Card from './components/card.jsx'
import './index.css'

function App() {
  let myObj = {
    name: "Chaitanya",
    age: 25,
  }

  let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded">Tailwind Test</h1>
      <Card  username="Manav" heading="Heading1" obj = {myObj} arr = {newArr} />
      <Card username="User2" heading="Heading2"/>
    </>
  )
}

export default App

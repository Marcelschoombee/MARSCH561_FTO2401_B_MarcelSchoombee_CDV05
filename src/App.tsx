import Header from "./components/header"
import Card from "./components/cards"
import './App.css'

function App() {
  return (
    <>
      <div>
        <Header />
        <section className="cards-list">
        <Card />
        <Card />
        </section>
      </div>
    </>
  )
}

export default App

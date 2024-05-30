import Header from "./components/header"
import Card from "./components/cards"
import Footer from "./components/footer.tsx"
import './App.css'
import data from "./data.tsx"

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
})        
  return (
    <>
      <div>
        <Header />
        <section className="cards-list">
        {cards}
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App



export default function Card(props) {
   
    return (
        <section className="cards-list">
        <div className="card">
            <img 
                src={`./assets/${props.coverImg}`} 
                className="card--image" 
            />
            
            <h4 className="card--title">{props.title}</h4>
            <p>{props.description}</p>
           
        </div>
        </section>
    )
}
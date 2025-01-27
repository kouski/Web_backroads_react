import { tours } from "../data"
import Titles from "./Titles"

function Tours() {
  return (
    <section className="section" id="tours">
      <Titles title='featured ' spanTitle='tours'/>
      
      <div className="section-center featured-center">
        
        {tours.map(tour=>{
          return(
            <article className="tour-card" key={tour.id}>
          <div className="tour-img-container">
            <img src={tour.image} className="tour-img" alt="" />
            <p className="tour-date">{tour.date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{tour.title}</h4>
            </div>
            <p>
              {tour.text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {tour.country}
              </p>
              <p>{tour.day}</p>
              <p>{tour.amount}</p>
            </div>
          </div>
        </article>
          )
        })}
        
      </div>
    </section>
  )
}

export default Tours
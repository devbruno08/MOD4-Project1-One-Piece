import "./card.css";

export function Card({ name, title, imageURL, gender }) {
    return (
        <div className="cards">
            <h2>Wanted</h2>
            <img src={imageURL} alt={name} />
            <h2>{name}</h2>
            <section className="cards-infos">
                <span className="card-title">Title:</span>
                <h3>{title}</h3>
            </section>
            <section className="cards-infos">
                <span className="card-gender">Gender:</span>
                <h3>{gender}</h3>
            </section>
        </div>
    );
}
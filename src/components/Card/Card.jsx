import './Card.css';

function Card() {
    return (
        <div className={"card"}>
            <input type="checkbox" />
            <p>Colocar as roupas para secar</p>
            <button className="edit-btn"><i class="fi fi-rr-edit"></i></button>
            <button className="delete-btn"><i class="fi fi-rr-trash"></i></button>
        </div>
    )
}

export default Card;
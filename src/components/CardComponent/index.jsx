import '../../assets/card.css';

const CardComponent = ({ name, link, point }) => {
    return (
        <div className='card'>
            <div className="card-body">
                <div>
                    <img src={link} alt={name} />
                </div>
                <div>
                    <p>{ name }</p>
                </div>
            </div>
            <div className="card-footer">
                <span>{ point }</span>
            </div>
        </div>
    );
}

export default CardComponent;
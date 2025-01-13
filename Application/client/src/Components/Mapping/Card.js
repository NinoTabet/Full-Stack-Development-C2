const Card = ({title, price, category}) => {
    return(
        <div className='container mt-5 w-25'>
            <div className='card text-center'>
                <div className='card-body'>
                    <h1 className='card-title'>{title}</h1>
                    <p className='card-subtitle text-body-secondary'>{price}</p>
                    <p className='card-text'>{category}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
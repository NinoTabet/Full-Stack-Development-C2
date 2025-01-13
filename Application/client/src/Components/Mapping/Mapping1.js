const Mapping1 = () => {

    const fruitsArray = ['Apple', 'Banana', 'Orange'];

    return(
        <ul>
            {fruitsArray.map((individualFruit, index) => (
                <li key={index}>{individualFruit}</li>
            ))}
        </ul>
    )
}

export default Mapping1;
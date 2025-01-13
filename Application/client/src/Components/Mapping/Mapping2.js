const Mapping2 = () =>{

    const products = [
        { id: 1, name: 'Laptop', price: 999, category: 'Electronics' },
        { id: 2, name: 'Shirt', price: 29, category: 'Apparel' },
        { id: 3, name: 'Coffee Maker', price: 79, category: 'Home Appliances' },
        { id: 4, name: 'Smartphone', price: 699, category: 'Electronics' },
        { id: 5, name: 'Blender', price: 49, category: 'Home Appliances' },
        { id: 6, name: 'Running Shoes', price: 120, category: 'Apparel' },
        { id: 7, name: 'Headphones', price: 199, category: 'Electronics' },
    ];  

    return(
        <ul>
            {products.map((product) => (
                <div key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>
            ))}
        </ul>
    )
}

export default Mapping2;
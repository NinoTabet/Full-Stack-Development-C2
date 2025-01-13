const EventExample2 = () => {

    let name;
    const handleClick = () =>{
   
        if (name === 'mario'){
            name = 'luigi'
        }else{
            name = 'mario'
        }
        console.log(name)
    }

    return(
        <>
            <button onClick={handleClick}>Click me to change name</button>
        </>
    )
}

export default EventExample2;
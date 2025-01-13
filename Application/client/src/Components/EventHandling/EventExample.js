const EventExample = () => {

    let x = 0;
    const handleClick = () =>{
        console.log(x++);
    }

    const handleClickAgain = (name) =>{
        console.log(name)
    }

    return(
        <>
            <button onClick={handleClick}>Click me for number</button>
            <button onClick={() => handleClickAgain('Mario')}>Click me for name</button>
        </>
    )
}

export default EventExample;
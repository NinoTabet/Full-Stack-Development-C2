const Example1 = (props) => {

    const isLoggedIn = props.isLoggedIn;

    const message = isLoggedIn ? 'Welcome back!' : 'Please log in.'

    return(
        <h1>{message}</h1>
    )
}

export default Example1;
import { NavLink, Link } from "react-router-dom";

const Test = () => {

    return(
        <>
            <NavLink to='/forms' className='bg-warning' activeClassName='bg-danger'>
                Forms
            </NavLink>
            <Link to='/'>
                Forms
            </Link>
        </>

    )
}
export default Test;
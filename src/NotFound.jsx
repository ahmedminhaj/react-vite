import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 error</h2>
            <p>Page not found.</p>
            <Link to='/'>Go back to homepage</Link>
        </div>
    );
}
 
export default NotFound;
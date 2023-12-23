import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Not sorry</h2>
            <p>Page can't be found</p>
            <Link to="/">Go to homepage...</Link>
        </div>
    );
}

export default NotFound;
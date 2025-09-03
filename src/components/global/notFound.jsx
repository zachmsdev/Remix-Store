
import '../../styles/components/errorPage.scss'
import { Link } from 'react-router-dom'

// 404 Error Component

const NotFound = () => {
    return (
        <div className="errorPage">
            <h1>Page not found.</h1>
            <Link to="/">Back home</Link>
        </div>
    )
}

export default NotFound;


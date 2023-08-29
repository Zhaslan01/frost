import {Link} from "react-router-dom";

const SecondPage = ()=> {
    return (
        <><Link to={'/first'}>
            <button>
                first Page
            </button>
        </Link>
            <h2>Second Page</h2>
        </>
    );
}

export default SecondPage;
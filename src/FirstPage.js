import {Link} from "react-router-dom";

const FirstPage = () => {
    return (
        <>
            <Link to={'/second'}>
                <button>
                    second Page
                </button>
            </Link>
            <h2>First Page</h2>
        </>
    );
}

export default FirstPage;
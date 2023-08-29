import App from './App';
import {useParams} from "react-router-dom";

const UserPage = () => {
    const params = useParams();
    console.log(
        params
    )

    return (
        <>
            <h2>User Page({params.login})</h2>
        </>
    )
}

export default UserPage;
import "./Comments.css"


function Comments(props) {
    return (
        <div>
            {props.data.map((item, index) => {
                return (
                    <div className="comment">
                        <div className="user">{item.user.firstName} {item.user.lastName} {item.user.email}</div>
                        <div className="text">{item.review}</div>
                    </div>
                )
            })}
        </div>
    )
}


export default Comments;

import UserInfo from "./UserInfo";
import FormattedDate from "./FormattedDate";

function Comment(props) {
    return (
      <div className="Comment componentBox">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <FormattedDate date={props.date} />
      </div>
    );
  }
  
  export default Comment;
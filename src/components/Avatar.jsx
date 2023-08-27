function Avatar(props) {
    return (
      <img className="Avatar" src={props.user.avatarUrl} />
    );
  }

  export default Avatar;
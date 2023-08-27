function Greeting(props) {
  return (
    <div>
      <h3>Hello {props.name ? props.name : 'World'}</h3>
      {/* If there are children, render them below the greeting */}
      {props.children}
    </div>
  );
}

export default Greeting;

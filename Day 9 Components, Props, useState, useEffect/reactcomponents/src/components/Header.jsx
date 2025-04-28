function Header({ name }) {
  // Conditional Rendering using : if-else
  // var temp;
  // if (name == null) {
  //   temp = <button>Login</button>;
  // } else {
  //   temp = <button>Login</button>;
  // }

  return (
    <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h1>I am header</h1>
      {name == null ? <button>Login</button> : <h1>Welcome {name}</h1>}
    </div>
  );
}

export default Header;

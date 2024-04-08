import React from "react";

export default class Test extends React.Component {
  render() {
    const { name, age } = this.props;

    return (
      <>
        <h1>Hello {name}!</h1>
        <p>Age is {age}</p>
        <hr />
      </>
    );
  }
}

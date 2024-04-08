import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 60px;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to top, #24243e, #302b63, #0f0c29);

  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1%;
  color: white;
  &:hover {
    color: lightblue;
  }
`;

const CartSection = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  padding: 1%;
`;

const CartIcon = styled.img`
  width: 30px;
  color: white;
`;
const CartItems = styled.span`
  font-size: 1rem;
  position: absolute;
  top: 5px;
  color: ${(props) => props.color};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  /* visibility: visible; */
  // height: auto;
  // background-color: violet;
  // width: 20px;
  // border-radius: 50%;
`;

export default class Navbar extends React.Component {
  render() {
    const { cartCount } = this.props;
    return (
      <>
        <Nav>
          <Title>Title</Title>
          <CartSection>
            <CartIcon
              alt="CartIcon"
              src="https://cdn-icons-png.flaticon.com/128/5337/5337564.png"
            />
            <CartItems color={"white"} show={true}>
              {cartCount}
            </CartItems>
          </CartSection>
        </Nav>
      </>
    );
  }
}

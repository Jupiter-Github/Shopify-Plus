import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCartItem, decrementCartItem } from "../Redux/EcomActions";
import { Button, Container, Row, Col, ButtonGroup } from "reactstrap";

const CartProduct = () => {
  const cartData = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const handleIncrement = (id) => {
    dispatch(incrementCartItem(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCartItem(id));
  };

  return (
    <>
      {cartData?.map((value, index) => (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <Container>
              <Row>
                <Col xs="12" md="2" lg="1" className="p-0">
                  <div className="CartProductImageDiv">
                    <img src={value.image} alt="product" />
                  </div>
                </Col>
                <Col
                  xs="12"
                  md="6"
                  className="CartProductNameDiv p-0"
                  title={value.title}
                >
                  <h6>{value.title}</h6>
                </Col>
              </Row>
            </Container>
          </td>
          <td>${value.price}</td>
          <td>
            <ButtonGroup size="sm">
              <Button onClick={() => handleDecrement(value.id)}>-1</Button>
              <span className="mx-2">{value.quantity}</span>
              <Button onClick={() => handleIncrement(value.id)}>+1</Button>
            </ButtonGroup>
          </td>
        </tr>
      ))}
    </>
  );
};

export default CartProduct;

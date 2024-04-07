import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoginStatus } from "../Redux/EcomActions";
import Swal from "sweetalert2";
import {
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const LoginModal = ({ toggleShowModal }) => {
  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);

    if (toggleShowModal) {
      toggleShowModal();
    }
  };

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLoginButton = () => {
    if (userName === "akash" && password === "12345") {
      dispatch(setLoginStatus(true));
    } else {
      Swal.fire({
        title: "Invalid UserName",
        icon: "error",
      });
    }
    toggle();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Please Login First!</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup floating>
              <Input
                id="userName"
                type="text"
                placeholder="User Name"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Label for="userName">User Name</Label>
            </FormGroup>{" "}
            <FormGroup floating>
              <Input
                id="userPassword"
                placeholder="Password"
                type="text"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Label for="userPassword">Passsword</Label>
            </FormGroup>{" "}
          </Form>
        </ModalBody>
        <ModalFooter>
          (Username:akash Password:12345)
          <Button color="primary" onClick={handleLoginButton}>
            Login
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;

import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
   const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const validateName = () => {
    const nameLength = name.length;
    return nameLength >= 6;
  };

  const validatePassword = () => {
    const passwordRegex = /[a-zA-Z0-9]{8,}/;
    return passwordRegex.test(password);
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <Form>
        <FormGroup controlId="name">
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
            minLength="6"
          />
        </FormGroup>
        <FormGroup controlId="password">
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            minLength="8"
          />
        </FormGroup>
        <FormGroup controlId="image">
          <Label for="image">Image</Label>
          <Input
            type="file"
            id="image"
            value={image}
            onChange={handleImageChange}
          />
        </FormGroup>
        <FormGroup controlId="address">
          <Label for="address">Address</Label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};


export default Signup;

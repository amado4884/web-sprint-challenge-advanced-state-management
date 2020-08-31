import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import styled from "styled-components";
import { addSmurf } from "../actions";

const FormStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 50rem;
  margin: 2rem auto;
`;

const Form = ({ sendSmurf }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !height) return;
    const newSmurf = { name, age: Number(age), height };
    console.log(newSmurf);
    sendSmurf(newSmurf);
  };

  return (
    <>
      <h4 style={{ textAlign: "center" }}>Add a Smurf</h4>
      <FormStyle>
        <form onSubmit={onSubmit}>
          <input placeholder="Name" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          <input placeholder="Age" value={age} name="age" onChange={(e) => setAge(e.target.value)} />
          <input placeholder="Height" value={height} name="height" onChange={(e) => setHeight(e.target.value)} />
          <input type="submit" value="Add" onClick={onSubmit} />
        </form>
      </FormStyle>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { sendSmurf: (sm) => dispatch(addSmurf(sm)) };
};

export default connect(null, mapDispatchToProps)(Form);

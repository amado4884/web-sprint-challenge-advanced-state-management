import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const SmurfCard = styled.div`
  align-self: stretch;
  color: white;
  width: 15rem;
  padding: 1rem;
  background-color: darkslategray;
  border-radius: 1rem;
  border: 1px solid black;
  margin: 1rem;
`;

const Smurf = ({ smurf }) => {
  return (
    <SmurfCard>
      <h3>
        <NavLink to={`smurfs/${smurf.id}`}>
          {smurf.name} - #{smurf.id}
        </NavLink>
      </h3>
      <p>
        Age:
        {smurf.age}
      </p>
      <p>
        Height:
        {smurf.height}
      </p>
    </SmurfCard>
  );
};

export default Smurf;

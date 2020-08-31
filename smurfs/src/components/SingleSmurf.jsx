import React from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";

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

const SingleSmurf = ({ smurfs }) => {
  const { params } = useRouteMatch();
  console.log(useRouteMatch());
  const smurf = smurfs.filter((sm) => sm.id === Number(params.id))[0];
  return (
    <SmurfCard>
      <h3>
        {smurf && smurf.name} - #{smurf && smurf.id}
      </h3>
      <p>
        Age:
        {smurf && smurf.age}
      </p>
      <p>
        Height:
        {smurf && smurf.height}
      </p>
    </SmurfCard>
  );
};

export default SingleSmurf;

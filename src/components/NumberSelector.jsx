import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({ error, setError, selected, setSelect }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  console.log(selected);

  return (
    <NumberSelctorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value == selected}
            key={i}
            onClick={() => {
              setSelect(value);
            }}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelctorContainer>
  );
};

export default NumberSelector;

const NumberSelctorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 22px;

  .flex {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    align-self: self-end;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid; // to put text in center of the box
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

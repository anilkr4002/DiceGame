import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({roll,currenDice}) => {

  

  return (
    <DiceContainer>
      <div className="Dice"
      onClick={roll}>
        <img src={`/images/img/dice_${currenDice}.png`} alt="dice2" srcset="" />
      </div>
    <p>
      Click to roll
    </p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 47px;
    .Dice{
      cursor: pointer ;
    }

  `;

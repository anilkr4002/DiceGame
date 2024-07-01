  import TotalScore from "./Totalscore";
  import NumberSelector from "./NumberSelector";
  import styled from "styled-components";
  import RoleDice from "./RoleDice";
  import { useState } from "react";
  const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selected, setSelect] = useState();
    const [currenDice, SetCurrent] = useState(1);
    const [error, SetError] = useState("");

    const generateNo =(min,max)=>{
      return Math.floor(Math.random() *(max-min)) +min;
    };

    const roll=()=>{
        if(!selected){ 
              SetError("You have not selected any number");
          return ;
          
      }
      SetError("");
      const Random=generateNo(1,6);
      SetCurrent((prev)=> Random)  ;

      if(selected===Random){
          setScore((prev)=prev + 6);}
          else{
              setScore((prev)=>prev-2);
          }
          
          setSelect(undefined);
      }
      
      return (
          <MainContainer>
        <div className="topSection">
          <TotalScore  score={score}/>
          <NumberSelector error ={error} selected={selected} setSelect={setSelect} />
        </div>
        <RoleDice currenDice={currenDice} roll={roll} />
      </MainContainer>
    );
  };


  export default GamePlay;

  const MainContainer = styled.main`
    padding-top: 70px;
    .topSection {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  `;

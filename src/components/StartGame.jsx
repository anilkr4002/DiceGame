import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dices1.png" alt="" srcset="" />
      </div>
      <div  className="">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  h1{
    font-size:96px;
    /* flex-wrap:nowrap; */
    white-space: nowrap;
}
`;

const Button = styled.button`
  width: 220px;
  height: Hug (44px) px;
  padding: 10px 18px 10px 18px;
  /* gap: 10px; */
  border-radius: 5px ;
  opacity: 0px;
  background: #000000;
  color: white;
  cursor :pointer;
  border:1px solid transparent;
  &:hover{
    background-color: white;
    color: black;
    border:1px solid black;
    transition: 0.3s background ease-in;

  }
`;

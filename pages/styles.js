import styled from "styled-components";

export const GeralContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 45rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 1rem;
  width: 50rem;
  margin: 10%;
  background-color: #d3d3d3;
  border-radius: 0.2rem;
`;

export const TitleCard = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const InputCard = styled.input`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  width: 50%;
  background-color: #fff;
  text-align: center;
  height: 3rem;
`;

export const ButtonCard = styled.div`
  width: 25%;
  background-color: #006e18;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  border-radius: 0.2rem;
`;

export const TitleButtonCard = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: #fff;
`;

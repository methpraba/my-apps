import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import image from './images/back.gif';



const AppContainer = styled.div`
  width: auto;
  height: auto;
  display: flexbox;
  align-items: center;
  overflow:auto;
  justify-content: center;
  background-size:cover;
  min-height: 100vh;
`;


function App() {
  return (
    <div style={{ backgroundImage:`url(${image})`}}>
    <AppContainer>
      <AccountBox />
    </AppContainer></div>
  );
}

export default App;

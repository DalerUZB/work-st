import styled from "styled-components";
import Home from "./pages/Home";

function App() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
`;

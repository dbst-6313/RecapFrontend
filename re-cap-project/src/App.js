import { Container } from 'semantic-ui-react';
import './App.css';
import Navi from './Layouts/Navi.jsx';
import MainPage from './Layouts/MainPage';

function App() {
  return (
    <div className="App">
       <Navi></Navi>
       <Container className='main'>
         <MainPage></MainPage>
       </Container>
    </div>
  );
}

export default App;

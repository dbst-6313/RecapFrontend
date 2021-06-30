import { Container } from 'semantic-ui-react';
import './App.css';
import Navi from './Layouts/Navi.jsx';
import Dashboard from './Layouts/Dashboard';

function App() {
  return (
    <div className="App">
       <Navi></Navi>
       <Container className='main'>
         <Dashboard></Dashboard>
       </Container>
    </div>
  );
}

export default App;

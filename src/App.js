import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { ShowUsers } from './components/ShowUsers';
import { Header } from './components/Header';
import { Aside } from './components/Aside';
import { CreateUser } from './components/CreateUser';

function App() {
  return (
    <div className="App">
      <Aside />
      <div className="main">
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<ShowUsers />} />
            <Route path='/create-user' element={<CreateUser /> } />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

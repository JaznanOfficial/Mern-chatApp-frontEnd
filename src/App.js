import logo from './logo.svg';
import './App.css';
import HomePages from './Pages/HomePages/HomePages';
import ChatPage from './Pages/ChatPages/ChatPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePages></HomePages>}>
        </Route>
        <Route path='/chats' element={<ChatPage></ChatPage>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

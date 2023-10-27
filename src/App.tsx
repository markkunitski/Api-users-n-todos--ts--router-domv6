import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import UserItemPage from './pages/UserItemPage';
import UserPage from './pages/UserPage';

function App() {
  return (<>
    <BrowserRouter>
      <div style={{margin: '50px'}}>
        <NavLink style={{background: 'teal', padding: '20px', marginRight: '10px'}} to={'/users'}>USERS</NavLink>
        <NavLink style={{background: 'teal', padding: '20px'}} to={'/todos'}>TODOS</NavLink>
      </div>
      <Routes>
        <Route path='/users' element={<UserPage></UserPage>}></Route>
        <Route path='/todos' element={<TodoPage></TodoPage>}></Route>
        <Route path='/users/:id' element={<UserItemPage></UserItemPage>}></Route>
        <Route path='*' element={<Navigate to="/users" replace />}></Route>
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;

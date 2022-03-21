import './App.css';
import { Navigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Feedback } from '../components/feedback/Feedback';
import { SwipeLeft } from '../components/swipe/SwipeLeft';
import { NavBar } from '../components/navbar/NavBar';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Accounts } from '../pages/accounts/Accounts';
import { Login } from '../pages/auth/Login';
import { Register } from '../pages/auth/Register';
import { Categories } from '../pages/categories/Categories';
import { Home } from '../pages/home/Home';
import { Profile } from '../pages/profile/Profile';
import { Transactions } from '../pages/transactions/Transactions';
import { useActions } from '../hooks/useActions';
import { Sidebar } from '../components/navbar/Sidebar';

function App() {
  const store = useTypedSelector(state => state)
  const { authUser } = useActions()
  const { user, swipe } = store
  console.log(store);  

  // if (user.loggedIn) {
  //   authUser(URL, loginForm)
  // }

  return (
    <div className="App">
    <BrowserRouter>
      <Feedback />
      <SwipeLeft />

      {!user.loggedIn 
      ? <Routes>
        <Route path='/auth/login' element={<Login />} /> 
        <Route path='/auth/register' element={<Register />} /> 
        <Route  // REDIRECT TO LOGIN
          path="*"
          element={<Navigate to="/auth/login" />}
        />
      </Routes> 
      : <>
        <NavBar />
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/accounts' element={<Accounts />}/>
          <Route path='/categories' element={<Categories />}/>
          <Route path='/transactions' element={<Transactions />}/>
          <Route path='/profile' element={<Profile />}/>
          {/* <Route path='/user' element={<UserList />}/> */}
          {/* <UserList /> */}
          {/* <TodoList /> */}

          <Route  // REDIRECT TO LOGIN
            path="*"
            element={<Navigate to="/" />}
          />

        </Routes>
        </>
      }
    </BrowserRouter>
    </div>
  );
}

export default App;

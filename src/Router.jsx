import {  Route, Routes } from 'react-router-dom';
import Album from './pages/Album/index';
import Search from './pages/Search/index';
import Favorites from './pages/Favorites';
import Login from './pages/Login/index';
import NotFound from './pages/NotFound/index'
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import { DefaultLayout } from './layouts/DefaultLayout/index';

export function Router() {
  return (
        <Routes>
          <Route  path="/" element={ <Login /> } />
          <Route path="/"element={<DefaultLayout />}>
            <Route  path="/search" element={ <Search /> } />
            <Route  path="/album/:id" element={ <Album /> } />
            <Route  path="/favorites" element={ <Favorites /> } />
            <Route  path="/profile" element={ <Profile /> } />
            <Route  path="/profile/edit" element={ <ProfileEdit />} />
          </Route>
          <Route path="/*" element={ <NotFound />} />
  
        </Routes>
    
  );
} 



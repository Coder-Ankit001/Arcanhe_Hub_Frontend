import { useState, useEffect, useContext } from 'react'
import Navbar from './components/Navbar'
import Contents from './components/Contents'
import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import profilePic from './assets/Wishlist_Avatar.jpeg'

import OpenWorld from './components/OpenWorld'
import Wishlist from './components/Wishlist'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import StoryRich from './components/StoryRich'
import VRTitle from './components/VRTitle'
import Horror from './components/Horror'

import { WishlistContext } from './context/wishlist'
import { ProfileContext } from './context/profile'
import './App.css'

function App() {
  const [profile, setProfile] = useState({
    username: "Random_User_0101",
    avatar: profilePic,
    preference :{
        lang: 'en',
        generes: ['Action', 'Adventure', 'Role-Playing']
    }
  })

  const [wishlist, setWishlist] = useState(() => {
    try {
      const getItem = localStorage.getItem('wishlistItem');
      return getItem ? JSON.parse(getItem) : [];
    }
    catch (err) {
      return []
    }
  })


  useEffect(() => {
    localStorage.setItem('wishlistItem', JSON.stringify(wishlist))
  }, [wishlist])


  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Contents /></>
    },

    {
      path: '/wishlist',
      element: <><Navbar /><Wishlist /></>
    },
    {
      path: '/login',
      element: <><Navbar /><Login /></>
    },
    {
      path: '/register',
      element: <><Navbar /><Register /></>
    },
    {
      path: `/user`,
      element: <><Navbar /><Dashboard /></>
    },
    {
      path: '/category/openworld',
      element: <><Navbar /><OpenWorld /></>
    },
    {
      path: '/category/story-rich',
      element: <><Navbar /><StoryRich /></>
    },
    {
      path: '/category/vr-title',
      element: <><Navbar /><VRTitle /></>
    },
    {
      path: '/category/horror',
      element: <><Navbar /><Horror /></>
    },
  ])
  return (
    <>
      <ProfileContext.Provider value={{profile, setProfile}}>
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
          <RouterProvider router={router} />
        </WishlistContext.Provider>
      </ProfileContext.Provider>
    </>
  )
}

export default App

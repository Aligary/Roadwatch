import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Chat, Community, Home, Login, Profile, SignUp } from '@/pages';

// Collection of paths for the site.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/community',
    element: <Community />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
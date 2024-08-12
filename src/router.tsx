import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { LoginPage } from './pages/LoginPage';
import { PATHS } from './common/constants';
import { HomePage } from './pages/HomePage';

export const router = createBrowserRouter([
  {
    element: <App />,
    path: PATHS.root,
    children: [
      {
        element: <HomePage />,
        index: true
      },
      {
        path: PATHS.login,
        element: <LoginPage />
      }
    ]
  }
]);

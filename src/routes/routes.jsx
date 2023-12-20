import Cookies from 'js-cookie';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import Crud from '../components/Crud/Crud';
import Dashboard from '../components/Dashboard/Dashboard';
import Error from '../components/Error/Error';
import Homepage from '../components/Homepage/Homepage';
import Login from '../components/Login/Login';

export const getToken = () => {
  return Cookies.get('token');
};

const userCookie = Cookies.get('user');

export const getRole = () => {
  if (userCookie) {
    const userData = JSON.parse(userCookie);
    const userRole = userData.roles[0];
    return userRole;
  }
  return null;
};

const userRole = getRole();

const commonRoutes = [
  {
    name: 'Accueil',
    path: '/',
    element: <Homepage />,
    isPrivate: false,
  },
  {
    name: 'Erreur',
    path: '*',
    element: <Error />,
    isPrivate: false,
  },
  {
    name: 'Login',
    path: '/login',
    element: <Login />,
    isPrivate: false,
  },
  {
    name: 'Tableau de bord',
    path: '/dashboard',
    element: <Dashboard />,
    isPrivate: true,
  },
  {
    name: 'Catégories',
    path: '/categories',
    element: <Crud entityType="categories" />,
    isPrivate: true,
  },
  {
    name: 'Marques',
    path: '/marques',
    element: <Crud entityType="brands" />,
    isPrivate: true,
  },
  {
    name: 'Produits',
    path: '/produits',
    element: <Crud entityType="products" />,
    isPrivate: true,
  },
];

const roleSpecificRoutes = {
  ROLE_SUPERADMIN: [
    {
      name: 'Associations',
      path: '/associations',
      element: <Crud entityType="organizations" />,
      isPrivate: true,
    },
    {
      name: 'Antennes',
      path: '/structures',
      element: <Crud entityType="structures" />,
      isPrivate: true,
    },
    {
      name: 'Utilisateurs',
      path: '/utilisateurs',
      element: <Crud entityType="users" />,
      isPrivate: true,
    },
  ],
  ROLE_ADMIN: [
    {
      name: 'Antennes',
      path: '/structures',
      element: <Crud entityType="structures" />,
      isPrivate: true,
    },
    {
      name: 'Utilisateurs',
      path: '/utilisateurs',
      element: <Crud entityType="users" />,
      isPrivate: true,
    },
  ],
  ROLE_MANAGER: [
    {
      name: 'Utilisateurs',
      path: '/utilisateurs',
      element: <Crud entityType="users" />,
      isPrivate: true,
    },
  ],
};

const routesConfig = [...commonRoutes, ...(roleSpecificRoutes[userRole] || [])];

export default routesConfig;

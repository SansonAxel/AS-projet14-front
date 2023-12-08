/* eslint import/no-cycle: [2, { maxDepth: 1 }] */
import Crud from '../components/Crud/Crud';
import Dashboard from '../components/Dashboard/Dashboard';
import Error from '../components/Error/Error';
import Homepage from '../components/Homepage/Homepage';
import Login from '../components/Login/Login';

const routesConfig = [
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
    name: 'Associations',
    path: '/associations',
    element: <Crud />,
    isPrivate: true,
  },
  {
    name: 'Catégories',
    path: '/categories',
    element: <Crud />,
    isPrivate: true,
  },
  {
    name: 'Antennes',
    path: '/structures',
    element: <Crud />,
    isPrivate: true,
  },
  {
    name: 'Utilisateurs',
    path: '/utilisateurs',
    element: <Crud />,
    isPrivate: true,
  },
  {
    name: 'Marques',
    path: '/marques',
    element: <Crud />,
    isPrivate: true,
  },
  {
    name: 'Produits',
    path: '/produits',
    element: <Crud />,
    isPrivate: true,
  },
];

export default routesConfig;

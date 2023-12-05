import {
  faGear,
  faSun,
  faThumbsUp,
  faCircleDot,
} from '@fortawesome/free-solid-svg-icons';

/* Team members datas */
export const membersData = [
  {
    name: 'Axel Sanson',
    teamRole: 'Product Owner - Dev backend',
    key: 1,
  },
  {
    name: 'Nabila Abdallah',
    teamRole: 'Scrum Master - Dev backend',
    key: 2,
  },
  {
    name: 'Jérémy Le Goff',
    teamRole: 'Lead dev backend',
    key: 3,
  },
  {
    name: 'Louis Le Croller',
    teamRole: 'Lead dev frontend',
    key: 4,
  },
];

/* Features datas */
export const featuresData = [
  { icon: faThumbsUp, content: 'Un affichage épuré', key: 1 },
  { icon: faSun, content: 'Une solution intuitive', key: 2 },
  { icon: faGear, content: 'Une gestion efficace', key: 3 },
  { icon: faCircleDot, content: 'Des données centralisées', key: 4 },
];

/* Options details for the form selector */
export const formOptions = [
  { value: 'default', label: 'Choisissez' },
  { value: 'informations', label: 'Vous informer' },
  { value: 'registration', label: 'Vous inscrire' },
];

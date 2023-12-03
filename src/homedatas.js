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
    imgUrl: 'https://dummyimage.com/100x100/a3a3a3/fff&text=illustration',
    key: 1,
  },
  {
    name: 'Nabila Abdallah',
    teamRole: 'Scrum Master - Dev backend',
    imgUrl: 'https://dummyimage.com/100x100/a3a3a3/fff&text=illustration',
    key: 2,
  },
  {
    name: 'Jérémy Le Goff',
    teamRole: 'Lead dev backend',
    imgUrl: 'https://dummyimage.com/100x100/a3a3a3/fff&text=illustration',
    key: 3,
  },
  {
    name: 'Louis Le Croller',
    teamRole: 'Lead dev frontend',
    imgUrl: 'https://dummyimage.com/100x100/a3a3a3/fff&text=illustration',
    key: 4,
  },
  {
    name: 'Jacques André',
    teamRole: 'Git Master - Dev frontend',
    imgUrl: 'https://dummyimage.com/100x100/a3a3a3/fff&text=illustration',
    key: 5,
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

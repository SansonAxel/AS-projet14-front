import * as Yup from 'yup';

const now = new Date();

const categoryFormConfig = [
  {
    name: 'name',
    id: 'category',
    label: 'Nom de la catégorie*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'createdAt',
    id: 'category',
    label: 'Date création',
    type: 'dateTime',
    initialValue: now.toISOString().slice(0, 19),
  },
];

export default categoryFormConfig;

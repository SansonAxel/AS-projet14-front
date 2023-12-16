import * as Yup from 'yup';

const now = new Date();

const brandFormConfig = [
  {
    name: 'name',
    id: 'brand',
    label: 'Nom de la marque*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'createdAt',
    id: 'brand',
    label: 'Date création',
    type: 'dateTime',
    initialValue: now.toISOString().slice(0, 19),
  },
];

export default brandFormConfig;

import * as Yup from 'yup';

const categoryFormConfig = [
  {
    name: 'name',
    id: 'category',
    label: 'Nom de la catégorie*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'createdAt',
    id: 'category',
    label: 'Date création',
    type: 'dateTime',
    initialValue: new Date(),
    validation: Yup.date(),
  },
];

export default categoryFormConfig;

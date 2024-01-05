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
];

export default categoryFormConfig;

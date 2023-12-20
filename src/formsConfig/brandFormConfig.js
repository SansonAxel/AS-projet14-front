import * as Yup from 'yup';

const brandFormConfig = [
  {
    name: 'name',
    id: 'brand',
    label: 'Nom de la marque*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
];

export default brandFormConfig;

import * as Yup from 'yup';

const productFormConfig = [
  {
    name: 'name',
    id: 'product',
    label: 'Nom du produit*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  // ! catégorie et marque en attente
  // {
  //   name: 'structuresId',
  //   id: 'product',
  //   label: 'Structure*',
  //   type: 'number',
  //   initialValue: null,
  //   validation: Yup.number().required('Champ requis'),
  // },
  // {
  //   name: 'categoriesId',
  //   id: 'product',
  //   label: 'Catégorie',
  //   type: 'number',
  //   initialValue: null,
  //   validation: Yup.number().required('Champ requis'),
  // },
  // ! ------------------------------
  {
    name: 'description',
    id: 'product',
    label: 'Description',
    type: 'text',
    initialValue: '',
    validation: Yup.string().max(300, 'Ne doit pas dépasser 300 caractères'),
  },
  {
    name: 'picture',
    id: 'product',
    label: 'Image',
    type: 'text',
    initialValue: '',
    validation: Yup.string().max(255, 'Ne doit pas dépasser 255 caractères'),
  },
  {
    name: 'price',
    id: 'product',
    label: 'Prix*',
    type: 'number',
    initialValue: null,
    validation: Yup.number().max(9999, 'Trop long').required('Champ requis'),
  },
  {
    name: 'conservationType',
    id: 'product',
    label: 'Conservation*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'weight',
    id: 'product',
    label: 'Poids *',
    type: 'number',
    initialValue: null,
    validation: Yup.number().max(9999, 'Trop long').required('Champ requis'),
  },
  {
    name: 'conditioning',
    id: 'product',
    label: 'Conditionnement*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'quantity',
    id: 'product',
    label: 'Quantité',
    type: 'number',
    initialValue: null,
    validation: Yup.number().max(9999, 'Trop long'),
  },
  {
    name: 'expirationDate',
    id: 'product',
    label: "Date d'expiration*",
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'createdAt',
    id: 'product',
    label: 'Date création',
    type: 'dateTime',
    initialValue: new Date(),
    validation: Yup.date(),
  },
];

export default productFormConfig;

const productFormConfig = [
  {
    name: 'name',
    id: 'product',
    label: 'Nom du produit*',
    type: 'text',
    initialValue: '',
  },
  // ! catégorie et marque en attente
  {
    name: 'structuresId',
    id: 'product',
    label: 'Structure*',
    type: 'number',
    initialValue: null,
  },
  {
    name: 'categoriesId',
    id: 'product',
    label: 'Catégorie',
    type: 'number',
    initialValue: null,
  },
  // ! ------------------------------
  {
    name: 'description',
    id: 'product',
    label: 'Description',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'picture',
    id: 'product',
    label: 'Image',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'price',
    id: 'product',
    label: 'Prix*',
    type: 'number',
    initialValue: null,
  },
  {
    name: 'conservationType',
    id: 'product',
    label: 'Conservation*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'weight',
    id: 'product',
    label: 'Poids *',
    type: 'number',
    initialValue: null,
  },
  {
    name: 'conditioning',
    id: 'product',
    label: 'Conditionnement*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'quantity',
    id: 'product',
    label: 'Quantité',
    type: 'number',
    initialValue: null,
  },
  {
    name: 'expirationDate',
    id: 'product',
    label: "Date d'expiration*",
    type: 'text',
    initialValue: '',
  },
  {
    name: 'createdAt',
    id: 'product',
    label: 'Date création',
    type: 'dateTime',
    initialValue: new Date(),
  },
];

export default productFormConfig;

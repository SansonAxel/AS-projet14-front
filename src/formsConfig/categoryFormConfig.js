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
    initialValue: new Date(),
  },
];

export default categoryFormConfig;

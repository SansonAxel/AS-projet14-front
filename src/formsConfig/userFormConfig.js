const userFormConfig = [
  {
    name: 'firstName',
    id: 'user',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'lastName',
    id: 'user',
    label: 'Nom*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'email',
    id: 'user',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
  },
  {
    name: 'phoneNumber',
    id: 'user',
    label: 'Numéro de téléphone',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'password',
    id: 'user',
    label: 'Mot de passe*',
    type: 'password',
    initialValue: '',
  },
  {
    name: 'status',
    id: 'user',
    label: 'Statut*',
    type: 'boolean',
    initialValue: false,
  },
  {
    name: 'createdAt',
    id: 'user',
    label: 'Date création',
    type: 'dateTime',
    initialValue: new Date(),
  },
];

export default userFormConfig;

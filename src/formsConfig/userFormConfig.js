import * as Yup from 'yup';

const now = new Date();

const userFormConfig = [
  {
    name: 'firstname',
    id: 'user',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'lastname',
    id: 'user',
    label: 'Nom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'email',
    id: 'user',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .email('Adresse mail non valide')
      .max(180, 'Ne doit pas dépasser 180 caractères')
      .required('Champ requis'),
  },
  {
    name: 'phoneNumber',
    id: 'user',
    label: 'Numéro de téléphone',
    type: 'text',
    initialValue: '',
    validation: Yup.string().max(20, 'Ne doit pas dépasser 20 caractères'),
  },
  {
    name: 'password',
    id: 'user',
    label: 'Mot de passe*',
    type: 'password',
    initialValue: '',
    validation: Yup.string()
      .min(8, 'Doit faire 8 caractères minimum')
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'status',
    id: 'user',
    label: 'Statut*',
    type: 'boolean',
    initialValue: true,
    validation: Yup.bool(),
  },
  {
    name: 'createdAt',
    id: 'user',
    label: 'Date création',
    type: 'dateTime',
    initialValue: now.toISOString().slice(0, 19),
    validation: Yup.date(),
  },
];

export default userFormConfig;

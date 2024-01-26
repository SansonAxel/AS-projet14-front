import * as Yup from 'yup';

export const loginFormConfig = [
  {
    name: 'email',
    id: 'login',
    label: 'Adresse email',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .max(180, 'Ne doit pas dépasser 180 caractères')
      .required('Champ requis'),
  },
  {
    name: 'password',
    id: 'password',
    label: 'Mot de passe',
    type: 'password',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
];

export default loginFormConfig;

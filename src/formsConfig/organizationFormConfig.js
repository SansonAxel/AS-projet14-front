import * as Yup from 'yup';

const organizationFormConfig = [
  {
    name: 'name',
    id: 'organization',
    label: "Nom de l'association*",
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'email',
    id: 'organization',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .email('Adresse mail non valide')
      .max(320, 'Ne doit pas dépasser 320 caractères')
      .required('Champ requis'),
  },
  {
    name: 'phoneNumber',
    id: 'organization',
    label: 'Numéro de téléphone',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(10, 'Ne doit pas dépasser 10 caractères')
      .required('Champ requis'),
  },
  {
    name: 'address',
    id: 'organization',
    label: 'Adresse postale*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'siren',
    id: 'organization',
    label: 'Numéro de SIREN*',
    type: 'text',
    initialValue: '',
    validation: Yup.number()
      .typeError('Doit être un nombre')
      .min(99999999, 'Doit contenir 9 chiffres')
      .max(999999999, 'Doit contenir 9 chiffres')
      .required('Champ requis'),
  },
  {
    name: 'type',
    id: 'organization',
    label: 'Statut juridique*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'status',
    id: 'organization',
    label: 'Statut*',
    type: 'select',
    options: [
      { value: 0, label: 'Inactif' },
      { value: 1, label: 'En attente' },
      { value: 2, label: 'Actif' },
    ],
    validation: Yup.number(),
    valueType: 'number',
  },
];

export default organizationFormConfig;

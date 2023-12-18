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
    validation: Yup.string().max(20, 'Ne doit pas dépasser 20 caractères'),
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
    validation: Yup.string()
      .max(9, 'Ne doit pas dépasser 9 caractères')
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
    label: 'Status*',
    type: 'number',
    initialValue: '',
    validation: Yup.number().max(99, 'Trop long').required('Champ requis'),
  },
  {
    name: 'createdAt',
    id: 'organization',
    label: 'Date création',
    type: 'dateTime',
    initialValue: new Date(),
    validation: Yup.date(),
  },
];

export default organizationFormConfig;

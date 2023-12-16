import * as Yup from 'yup';

const now = new Date();

const organizationFormConfig = [
  {
    name: 'name',
    id: 'organization',
    label: "Nom de l'association*",
    type: 'text',
    initialValue: '',
  },
  {
    name: 'email',
    id: 'organization',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
  },
  {
    name: 'phoneNumber',
    id: 'organization',
    label: 'Numéro de téléphone',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'address',
    id: 'organization',
    label: 'Adresse postale*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'siren',
    id: 'organization',
    label: 'Numéro de SIREN*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'type',
    id: 'organization',
    label: 'Statut juridique*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'status',
    id: 'organization',
    label: 'Status*',
    type: 'number',
    initialValue: '',
  },
  {
    name: 'createdAt',
    id: 'organization',
    label: 'Date création',
    type: 'dateTime',
  },
];

export default organizationFormConfig;

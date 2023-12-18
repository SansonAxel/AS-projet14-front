import * as Yup from 'yup';

const structureFormConfig = [
  // ! organizationId en attente
  {
    name: 'name',
    id: 'structure',
    label: "Nom de l'antenne*",
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'siret',
    id: 'structure',
    label: 'Numéro de SIRET*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(9, 'Ne doit pas dépasser 9 caractères')
      .required('Champ requis'),
  },
  {
    name: 'status',
    id: 'structure',
    label: 'Statut*',
    type: 'boolean',
    initialValue: true,
    validation: Yup.bool(),
  },
  {
    name: 'createdAt',
    id: 'structure',
    label: 'Date création',
    type: 'dateTime',
    initialValue: new Date(),
    validation: Yup.date(),
  },
];

export default structureFormConfig;

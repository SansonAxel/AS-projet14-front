import * as Yup from 'yup';

const structureFormConfig = [
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
    type: 'select',
    options: [
      { value: true, label: 'Actif' },
      { value: false, label: 'Inactif' },
    ],
    valueType: 'boolean',
  },
];

export default structureFormConfig;

const now = new Date();

const structureFormConfig = [
  // ! organizationId en attente
  {
    name: 'name',
    id: 'structure',
    label: "Nom de l'antenne*",
    type: 'text',
    initialValue: '',
  },
  {
    name: 'siret',
    id: 'structure',
    label: 'Numéro de SIRET*',
    type: 'text',
    initialValue: '',
  },
  {
    name: 'status',
    id: 'structure',
    label: 'Statut*',
    type: 'number',
    initialValue: null,
  },
  {
    name: 'createdAt',
    id: 'structure',
    label: 'Date création',
    type: 'dateTime',
    initialValue: now.toISOString().slice(0, 19),
  },
];

export default structureFormConfig;

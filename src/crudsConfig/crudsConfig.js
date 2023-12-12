import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetOrganizationsQuery,
  useGetProductsQuery,
  useGetStructuresQuery,
  useGetUsersQuery,
} from '../services/projectApi';

const createColumn = (field, headerName, type, editableState = false) => ({
  field,
  headerName,
  type,
  editable: editableState,
  headerClassName: 'List__Table__Head',
  cellClassName: 'List__Table__Col',
  flex: 1,
  maxWidth: field === 'id' ? 75 : '100%',
  headerAlign: 'left',
  align: 'left',
});

export const brandConfig = {
  query: useGetBrandsQuery,
  columns: [createColumn('id', 'ID', 'number'), createColumn('name', 'Nom')],
  mapFunction: (element) => ({
    id: element.id,
    name: element.name,
  }),
};

export const categoryConfig = {
  query: useGetCategoriesQuery,
  columns: [createColumn('id', 'ID', 'number'), createColumn('name', 'Nom')],
  mapFunction: (element) => ({
    id: element.id,
    name: element.name,
  }),
};

export const organizationConfig = {
  query: useGetOrganizationsQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('name', 'Nom'),
    createColumn('email', 'Email', 'string', true),
    createColumn('phoneNumber', 'Téléphone'),
    createColumn('adress', 'Adresse'),
    createColumn('siren', 'N° SIREN', 'number'),
    createColumn('type', 'Type'),
    createColumn('status', 'Statut'),
  ],
  mapFunction: (element) => ({
    id: element.id,
    name: element.name,
    email: element.email,
    phoneNumber: element.phoneNumber,
    adress: element.adress,
    siren: element.siren,
    type: element.type,
    status: element.status,
  }),
};

export const productConfig = {
  query: useGetProductsQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('name', 'Produits'),
    createColumn('weight', 'Unités', 'number'),
    createColumn('price', 'Prix', 'number'),
    createColumn('conservationType', 'Conservation'),
    createColumn('conditioning', 'Conditionnement'),
  ],
  mapFunction: (element) => ({
    id: element.id,
    name: element.name,
    weight: element.weight,
    price: element.price,
    conservationType: element.conservationType,
    conditioning: element.conditioning,
  }),
};

export const structureConfig = {
  query: useGetStructuresQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('organizationId', 'Association'),
    createColumn('name', 'Nom'),
    createColumn('siret', 'N° SIRET', 'number'),
    createColumn('status', 'statut'),
  ],
  mapFunction: (element) => ({
    id: element.id,
    organizationId: element.organizationId,
    name: element.name,
    siret: element.siret,
    status: element.status,
  }),
};

export const userConfig = {
  query: useGetUsersQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('firstname', 'Prénom'),
    createColumn('lastname', 'Nom'),
    createColumn('email', 'Email'),
    createColumn('phoneNumber', 'Téléphone'),
    createColumn('roles', 'Roles'),
  ],
  mapFunction: (element) => ({
    id: element.id,
    firstname: element.firstname,
    lastname: element.lastname,
    email: element.email,
    phoneNumber: element.phoneNumber,
    roles: element.roles,
  }),
};

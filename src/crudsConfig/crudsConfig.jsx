import {
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetOrganizationsQuery,
  useGetProductsQuery,
  useGetStructuresQuery,
  useGetUsersQuery,
} from '../services/projectApi';

const createColumn = (field, headerName, type, valueOptions) => ({
  field,
  headerName,
  type,
  valueOptions,
  headerClassName: 'List__Table__Head',
  cellClassName: 'List__Table__Col',
  flex: 1,
  headerAlign: 'left',
  align: 'left',
  disableColumnMenu: true,
  sortable: true,
});

export const brandConfig = {
  query: useGetBrandsQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('name', 'Nom', 'string'),
  ],
  rowMapFunction: (element) => ({
    id: element.id,
    name: element.name,
  }),
};

export const categoryConfig = {
  query: useGetCategoriesQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('name', 'Nom', 'string'),
  ],
  rowMapFunction: (element) => ({
    id: element.id,
    name: element.name,
  }),
};

export const organizationConfig = {
  query: useGetOrganizationsQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('name', 'Nom', 'string'),
    createColumn('email', 'Email', 'string'),
    createColumn('phoneNumber', 'Téléphone', 'string'),
    createColumn('address', 'Adresse', 'string'),
    createColumn('siren', 'N° SIREN', 'number'),
    createColumn('type', 'Type', 'string'),
    createColumn('status', 'Active', 'singleSelect', [
      { value: 0, label: 'inactif' },
      { value: 1, label: 'en attente' },
      { value: 2, label: 'actif' },
    ]),
  ],
  rowMapFunction: (element) => ({
    id: element.id,
    name: element.name,
    email: element.email,
    phoneNumber: element.phoneNumber,
    address: element.address,
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
    createColumn('weight', 'Poids Kg', 'number'),
    createColumn('price', 'Prix €', 'string'),
    createColumn('conservationType', 'Conservation', 'string'),
    createColumn('conditioning', 'Conditionnement', 'string'),
    createColumn('quantity', 'Quantité', 'number'),
    createColumn('brand', 'Marque', 'string'),
    createColumn('category', 'Catégorie', 'string'),
  ],
  rowMapFunction: (element) => ({
    id: element.id,
    name: element.name,
    weight: element.weight,
    price: element.price,
    conservationType: element.conservationType,
    conditioning: element.conditioning,
    quantity: element.quantity,
    brand: element.brands ? element.brands.name : '',
    category: element.categories ? element.categories.name : '',
  }),
};

export const structureConfig = {
  query: useGetStructuresQuery,
  columns: [
    createColumn('id', 'ID', 'number'),
    createColumn('name', 'Nom', 'string'),
    createColumn('siret', 'N° SIRET', 'number'),
    createColumn('status', 'Active', 'singleSelect', [
      { value: false, label: 'inactive' },
      { value: true, label: 'active' },
    ]),
  ],
  rowMapFunction: (element) => ({
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
    createColumn('firstname', 'Prénom', 'string'),
    createColumn('lastname', 'Nom', 'string'),
    createColumn('email', 'Email'),
    createColumn('phoneNumber', 'Téléphone', 'string'),
    createColumn('roles', 'Role', 'string'),
    createColumn('status', 'Actif', 'singleSelect', [
      { value: false, label: 'inactif' },
      { value: true, label: 'actif' },
    ]),
  ],
  rowMapFunction: (element) => ({
    id: element.id,
    firstname: element.firstname,
    lastname: element.lastname,
    email: element.email,
    phoneNumber: element.phoneNumber,
    roles: Array.isArray(element.roles)
      ? element.roles
          .filter((role) => role !== 'ROLE_USER')
          .map((role) => {
            switch (role) {
              case 'ROLE_SUPERADMIN':
                return 'Superadmin';
              case 'ROLE_ADMIN':
                return 'Admin';
              case 'ROLE_MANAGER':
                return 'Manager';
              case 'ROLE_LOGISTICIAN':
                return 'Logisticien';
              default:
                return role;
            }
          })
          .join(' ')
      : element.roles,
    status: element.status,
  }),
};

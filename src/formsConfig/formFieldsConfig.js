import * as Yup from 'yup';

// ====================================================
//                      *CONTACT
// ====================================================
export const formFieldsInformations = [
  {
    name: 'firstName',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'lastName',
    label: 'Nom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'email',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .email('Adresse mail non valide')
      .max(320, 'Ne doit pas dépasser 320 caractères')
      .required('Champ requis'),
  },
  {
    name: 'message',
    label: 'Votre message*',
    type: 'textarea',
    initialValue: '',
    validation: Yup.string()
      .max(1000, 'Message limité à 1000 caractères')
      .required('Champ requis'),
  },
];

// ====================================================
//                      *INSCRIPTION
// ====================================================

export const formFieldsRegistration = [
  {
    name: 'firstName',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'lastName',
    label: 'Nom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'organizationName',
    label: "Nom de l'association*",
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'organizationType',
    label: 'Statut juridique*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'email',
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
    label: 'Numéro de téléphone',
    type: 'text',
    initialValue: '',
    validation: Yup.string().max(20, 'Ne doit pas dépasser 20 caractères'),
  },
  {
    name: 'address',
    label: 'Adresse postale*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'siren',
    label: 'Numéro de SIREN*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(9, 'Ne doit pas dépasser 9 caractères')
      .required('Champ requis'),
  },
];

// ====================================================
//                      *LOGIN
// ====================================================

export const formFieldsLogin = [
  {
    name: 'email',
    label: 'Adresse email',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .max(180, 'Ne doit pas dépasser 180 caractères')
      .required('Champ requis'),
  },
  {
    name: 'password',
    label: 'Mot de passe',
    type: 'password',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
];

// ====================================================
//               *CRUD CREATE / PATCH
// ====================================================
const now = new Date();

export const formFieldsCreatePatch = {
  brands: [
    {
      name: 'name',
      id: 'brand',
      label: 'Nom de la marque*',
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    {
      name: 'createdAt',
      id: 'brand',
      label: 'Date création',
      type: 'dateTime',
      initialValue: now.toISOString().slice(0, 19),
    },
  ],
  categories: [
    {
      name: 'name',
      id: 'category',
      label: 'Nom de la catégorie*',
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    {
      name: 'createdAt',
      id: 'category',
      label: 'Date création',
      type: 'dateTime',
      initialValue: now.toISOString().slice(0, 19),
    },
  ],
  organizations: [
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
      initialValue: now.toISOString().slice(0, 19),
    },
  ],
  products: [
    {
      name: 'name',
      id: 'product',
      label: 'Nom du produit*',
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    // ! catégorie et marque en attente
    {
      name: 'structuresId',
      id: 'product',
      label: 'Structure*',
      type: 'number',
      initialValue: null,
      validation: Yup.number().required('Champ requis'),
    },
    {
      name: 'categoriesId',
      id: 'product',
      label: 'Catégorie',
      type: 'number',
      initialValue: null,
      validation: Yup.number().required('Champ requis'),
    },
    // ! ------------------------------
    {
      name: 'description',
      id: 'product',
      label: 'Description',
      type: 'text',
      initialValue: '',
      validation: Yup.string().max(300, 'Ne doit pas dépasser 300 caractères'),
    },
    {
      name: 'picture',
      id: 'product',
      label: 'Image',
      type: 'text',
      initialValue: '',
      validation: Yup.string().max(255, 'Ne doit pas dépasser 255 caractères'),
    },
    {
      name: 'price',
      id: 'product',
      label: 'Prix*',
      type: 'number',
      initialValue: null,
      validation: Yup.number().max(9999, 'Trop long').required('Champ requis'),
    },
    {
      name: 'conservationType',
      id: 'product',
      label: 'Conservation*',
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    {
      name: 'weight',
      id: 'product',
      label: 'Poids *',
      type: 'number',
      initialValue: null,
      validation: Yup.number().max(9999, 'Trop long').required('Champ requis'),
    },
    {
      name: 'conditioning',
      id: 'product',
      label: 'Conditionnement*',
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    {
      name: 'quantity',
      id: 'product',
      label: 'Quantité',
      type: 'number',
      initialValue: null,
      validation: Yup.number().max(9999, 'Trop long'),
    },
    {
      name: 'expirationDate',
      id: 'product',
      label: "Date d'expiration*",
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    {
      name: 'createdAt',
      id: 'product',
      label: 'Date création',
      type: 'dateTime',
      initialValue: now.toISOString().slice(0, 19),
    },
  ],
  structures: [
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
      label: 'Status*',
      type: 'bool',
      initialValue: '',
      validation: Yup.bool().required('Champ requis'),
    },
    {
      name: 'createdAt',
      id: 'structure',
      label: 'Date création',
      type: 'dateTime',
      initialValue: now.toISOString().slice(0, 19),
    },
  ],
  users: [
    {
      name: 'firstName',
      id: 'user',
      label: 'Prénom*',
      type: 'text',
      initialValue: '',
      validation: Yup.string()
        .max(100, 'Ne doit pas dépasser 100 caractères')
        .required('Champ requis'),
    },
    {
      name: 'lastName',
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
      type: 'number',
      initialValue: '',
      validation: Yup.number().max(99, 'Trop long').required('Champ requis'),
    },
    {
      name: 'createdAt',
      id: 'user',
      label: 'Date création',
      type: 'dateTime',
      initialValue: now.toISOString().slice(0, 19),
    },
  ],
};

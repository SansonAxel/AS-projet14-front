import { useSelector } from 'react-redux';
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
      .max(320, 'Ne doit pas dépasser 320 caractères')
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
//                      *CREATION
// ====================================================

export const formFieldOganization = [
  {
    name: 'name',
    label: "Nom de l'association*",
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
  {
    name: 'type',
    label: 'Statut juridique*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'status',
    label: 'Actif',
    type: 'number',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'createdAt',
    label: 'Date création',
    type: 'dateTime',
    initialValue: '2023-12-13',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
];

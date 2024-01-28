import * as Yup from 'yup';
import forbiddenMails from '../datas/forbiddenMails';

// ====================================================
//                      *CONTACT
// ====================================================
export const formFieldsInformations = [
  {
    name: 'firstName',
    id: 'informations',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'lastName',
    id: 'informations',
    label: 'Nom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'email',
    id: 'informations',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .email('Adresse mail non valide')
      .test(
        'forbidden-mail-domaine',
        'Domaine de messagerie non autorisé',
        (value) => {
          if (!value) return true;
          const domain = value.split('@')[1];
          return !forbiddenMails.includes(domain);
        }
      )
      .max(320, 'Ne doit pas dépasser 320 caractères')
      .required('Champ requis'),
  },
  {
    name: 'message',
    id: 'informations',
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
    id: 'registration',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'lastName',
    id: 'registration',
    label: 'Nom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'organizationName',
    id: 'registration',
    label: "Nom de l'association*",
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'organizationType',
    id: 'registration',
    label: 'Statut juridique*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'email',
    id: 'registration',
    label: 'Adresse email*',
    type: 'email',
    initialValue: '',
    validation: Yup.string()
      .email('Adresse mail non valide')
      .test(
        'forbidden-mail-domaine',
        'Domaine de messagerie non autorisé',
        (value) => {
          if (!value) return true;
          const domain = value.split('@')[1];
          return !forbiddenMails.includes(domain);
        }
      )
      .max(320, 'Ne doit pas dépasser 320 caractères')
      .required('Champ requis'),
  },
  {
    name: 'phoneNumber',
    id: 'registration',
    label: 'Numéro de téléphone',
    type: 'text',
    initialValue: '',
    validation: Yup.string().max(20, 'Ne doit pas dépasser 20 caractères'),
  },
  {
    name: 'address',
    id: 'registration',
    label: 'Adresse postale*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(255, 'Ne doit pas dépasser 255 caractères')
      .required('Champ requis'),
  },
  {
    name: 'siren',
    id: 'registration',
    label: 'Numéro de SIREN*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(9, 'Ne doit pas dépasser 9 caractères')
      .required('Champ requis'),
  },
];

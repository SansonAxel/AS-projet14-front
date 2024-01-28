import * as Yup from 'yup';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../config/config';
import forbiddenMails from '../datas/forbiddenMails';

export const getToken = () => {
  return Cookies.get('token');
};

const userCookie = Cookies.get('user');
const baseURL = config.apiUrl;

export const getOrganizationId = () => {
  if (userCookie) {
    const userData = JSON.parse(userCookie);
    const userOrganizationId = userData.organizations.id;
    return userOrganizationId;
  }
  return null;
};

export const getRole = () => {
  if (userCookie) {
    const userData = JSON.parse(userCookie);
    const userRole = userData.roles[0];
    return userRole;
  }
  return null;
};

export const fetchOrganizationsData = async () => {
  const token = getToken();

  try {
    const response = await axios.get(`${baseURL}/organizations`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const fetchStructuresData = async () => {
  const token = getToken();
  const id = getOrganizationId();
  try {
    const response = await axios.get(
      `${baseURL}/organizations/${id}/structures`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.structures;
  } catch (error) {
    return [];
  }
};

const passwordValidationSchema = Yup.string()
  .required('Champ requis')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{14,}$/,
    'Doit contenir au moins 14 caractères, 1 Majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial'
  );

const userFormConfig = [
  {
    name: 'firstname',
    id: 'user',
    label: 'Prénom*',
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
  {
    name: 'lastname',
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
      .test(
        'forbidden-mail-domaine',
        'Domaine de messagerie non autorisé',
        (value) => {
          if (!value) return true;
          const domain = value.split('@')[1];
          return !forbiddenMails.includes(domain);
        }
      )
      .max(320, 'Ne doit pas dépasser 180 caractères')
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
    validation: passwordValidationSchema,
  },

  {
    name: 'roles',
    id: 'user',
    label: 'Role*',
    type: 'select',
    options: [
      { value: ['ROLE_ADMIN', 'ROLE_USER'], label: 'Admin' },
      { value: ['ROLE_MANAGER', 'ROLE_USER'], label: 'Manager' },
      { value: ['ROLE_LOGISTICIAN', 'ROLE_USER'], label: 'Logisticien' },
    ],
    valueType: 'array',
  },
  {
    name: 'status',
    id: 'user',
    label: 'Statut*',
    type: 'select',
    options: [
      { value: true, label: 'Actif' },
      { value: false, label: 'Inactif' },
    ],
    valueType: 'boolean',
  },
];

const userRole = getRole();

if (userRole === 'ROLE_SUPERADMIN') {
  const associationsData = await fetchOrganizationsData();

  userFormConfig.push({
    name: 'organizations',
    id: 'user',
    label: 'Association',
    type: 'select',
    options: (associationsData || []).map((association) => ({
      value: association.id,
      label: association.name,
    })),
    valueType: 'object',
  });
}

if (userRole === 'ROLE_ADMIN') {
  const structuresData = await fetchStructuresData();
  userFormConfig.push({
    name: 'structures',
    id: 'user',
    label: 'Antenne',
    type: 'select',
    options: structuresData.map((structure) => ({
      value: structure.id,
      label: structure.name,
    })),
    valueType: 'object',
  });
}

export default userFormConfig;

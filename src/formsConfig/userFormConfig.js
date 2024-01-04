import * as Yup from 'yup';
import Cookies from 'js-cookie';
import axios from 'axios';

export const getToken = () => {
  return Cookies.get('token');
};

const userCookie = Cookies.get('user');

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
    const response = await axios.get(
      `http://localhost:8080/api/organizations`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching associations data:', error);
    return [];
  }
};

export const fetchStructuresData = async () => {
  const token = getToken();
  const id = getOrganizationId();
  try {
    const response = await axios.get(
      `http://localhost:8080/api/organizations/${id}/structures`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.structures;
  } catch (error) {
    console.error('Error fetching associations data:', error);
    return [];
  }
};

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
    options: associationsData.map((association) => ({
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

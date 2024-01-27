import * as Yup from 'yup';
import Cookies from 'js-cookie';
import axios from 'axios';
import config from '../config/config';

export const getToken = () => {
  return Cookies.get('token');
};

const baseURL = config.apiUrl;

const fetchBrandsData = async () => {
  const token = getToken();
  if (token) {
    try {
      const response = await axios.get(`${baseURL}/brands`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  }
  return [];
};

const brandsData = await fetchBrandsData();

const fetchCategoriesData = async () => {
  const token = getToken();
  if (token) {
    try {
      const response = await axios.get(`${baseURL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return [];
    }
  }
  return [];
};

const categoriesData = await fetchCategoriesData();

const productFormConfig = [
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
  {
    name: 'brands',
    id: 'products',
    label: 'Marque',
    type: 'select',
    options: brandsData
      .map((brand) => ({
        value: brand.id,
        label: brand.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
    valueType: 'object',
    extractId: true,
  },
  {
    name: 'categories',
    id: 'products',
    label: 'Catégorie',
    type: 'select',
    options: categoriesData
      .map((category) => ({
        value: category.id,
        label: category.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label)),
    valueType: 'object',
    extractId: true,
  },
  {
    name: 'price',
    id: 'product',
    label: 'Prix*',
    type: 'text',
    initialValue: null,
    validation: Yup.string()
      .max(5, 'Le prix est trop important')
      .required('Champ requis'),
  },
  {
    name: 'conservationType',
    id: 'product',
    label: 'Conservation*',
    type: 'select',
    options: [
      { value: 'Ambiant', label: 'Ambiant' },
      { value: 'Frais', label: 'Frais' },
      { value: 'Utra-frais', label: 'Utra-frais' },
      { value: 'Surgelé', label: 'Surgelé' },
    ],
    validation: Yup.string().required('Veuillez choisir une option'),
    valueType: 'string',
  },
  {
    name: 'weight',
    id: 'product',
    label: 'Poids *',
    type: 'number',
    initialValue: null,
    validation: Yup.number()
      .max(9999, 'Le poids est trop important')
      .required('Champ requis'),
  },
  {
    name: 'conditioning',
    id: 'product',
    label: 'Conditionnement*',
    type: 'select',
    options: [
      { value: 'Caisse/Carton', label: 'Caisse/Carton' },
      { value: 'Individuel', label: 'Individuel' },
      { value: 'Palette', label: 'Palette' },
    ],
    validation: Yup.string().required('Veuillez choisir une option'),
    valueType: 'string',
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
    label: "Date d'expiration (format AAAA-MM-JJ)*",
    type: 'text',
    initialValue: '',
    validation: Yup.string()
      .max(100, 'Ne doit pas dépasser 100 caractères')
      .required('Champ requis'),
  },
];

export default productFormConfig;

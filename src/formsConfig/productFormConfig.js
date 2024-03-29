import * as Yup from 'yup';
import Cookies from 'js-cookie';
import axios from 'axios';

export const getToken = () => {
  return Cookies.get('token');
};

export const fetchBrandsData = async () => {
  const token = getToken();
  try {
    const response = await axios.get(
      `https://sansonaxel-server.eddi.cloud/api/brands`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('brands', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching associations data:', error);
    return [];
  }
};

const brandsData = await fetchBrandsData();
console.log('brandsData', brandsData);

export const fetchCategoriesData = async () => {
  const token = getToken();
  try {
    const response = await axios.get(
      `https://sansonaxel-server.eddi.cloud/api/categories`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('categories', response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching associations data:', error);
    return [];
  }
};

const categoriesData = await fetchCategoriesData();
console.log('brandsData', categoriesData);

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
    options: brandsData.map((brand) => ({
      value: brand.id,
      label: brand.name,
    })),
    valueType: 'object',
  },
  {
    name: 'categories',
    id: 'products',
    label: 'Catégorie',
    type: 'select',
    options: categoriesData.map((category) => ({
      value: category.id,
      label: category.name,
    })),
    valueType: 'object',
  },
  {
    name: 'price',
    id: 'product',
    label: 'Prix*',
    type: 'text',
    initialValue: null,
    validation: Yup.string().max(100, 'Trop long').required('Champ requis'),
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
];

export default productFormConfig;

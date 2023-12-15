import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get('token');
};

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://sansonaxel-server.eddi.cloud/api/',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  refetchOnMountOrArgChange: 3,
  endpoints: (builder) => ({
    /* BRANDS */
    getBrands: builder.query({
      query: () => `brands`,
    }),
    addBrand: builder.mutation({
      query: (body) => ({
        url: `brands`,
        method: 'POST',
        body,
      }),
    }),
    /* CATEGORIES */
    getCategories: builder.query({
      query: () => `categories`,
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: `categories`,
        method: 'POST',
        body,
      }),
    }),
    /* ORGANIZATIONS */
    getOrganizations: builder.query({
      query: () => `organizations`,
    }),
    addOrganization: builder.mutation({
      query: (body) => ({
        url: `organizations`,
        method: 'POST',
        body,
      }),
    }),
    deleteOrganization: builder.mutation({
      query: (id) => ({ url: `organizations/${id}`, method: 'DELETE' }),
    }),
    updateOrganization: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `organizations/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    /* PRODUCTS */
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    addProduct: builder.mutation({
      query: (body) => ({
        url: `products`,
        method: 'POST',
        body,
      }),
    }),

    /* STRUCTURES */
    getStructures: builder.query({
      query: () => 'structures',
    }),
    addStructure: builder.mutation({
      query: (body) => ({
        url: `structures`,
        method: 'POST',
        body,
      }),
    }),
    /* USERS */
    getUsers: builder.query({
      query: () => 'users',
    }),
    addUser: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
    }),
    getUsersById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetBrandsQuery,
  useAddBrandMutation,

  useGetCategoriesQuery,
  useAddCategoryMutation,

  useGetOrganizationsQuery,
  useAddOrganizationMutation,
  useDeleteOrganizationMutation,
  useGetOrganizationQuery,
  useUpdateOrganizationMutation,

  useGetProductByIdQuery,
  useGetProductsQuery,
  useAddProductMutation,

  useGetStructuresQuery,
  useAddStructureMutation,

  useGetUsersQuery,
  useGetUsersByIdQuery,
  useAddUserMutation,
} = projectApi;

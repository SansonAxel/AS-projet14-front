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
    addBrands: builder.mutation({
      query: (body) => ({
        url: `brands`,
        method: 'POST',
        body,
      }),
    }),
    updateBrands: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `brands/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteBrands: builder.mutation({
      query: (id) => ({ url: `brands/${id}`, method: 'DELETE' }),
    }),
    /* CATEGORIES */
    getCategories: builder.query({
      query: () => `categories`,
    }),
    addCategories: builder.mutation({
      query: (body) => ({
        url: `categories`,
        method: 'POST',
        body,
      }),
    }),
    updateCategories: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `categories/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteCategories: builder.mutation({
      query: (id) => ({ url: `categories/${id}`, method: 'DELETE' }),
    }),
    /* ORGANIZATIONS */
    getOrganizations: builder.query({
      query: () => `organizations`,
    }),
    addOrganizations: builder.mutation({
      query: (body) => ({
        url: `organizations`,
        method: 'POST',
        body,
      }),
    }),
    updateOrganizations: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `organizations/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteOrganizations: builder.mutation({
      query: (id) => ({ url: `organizations/${id}`, method: 'DELETE' }),
    }),
    /* PRODUCTS */
    getProducts: builder.query({
      query: () => `products`,
    }),
    addProducts: builder.mutation({
      query: (body) => ({
        url: `products`,
        method: 'POST',
        body,
      }),
    }),
    updateProducts: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteProducts: builder.mutation({
      query: (id) => ({ url: `products/${id}`, method: 'DELETE' }),
    }),
    /* STRUCTURES */
    getStructures: builder.query({
      query: () => 'structures',
    }),
    addStructures: builder.mutation({
      query: (body) => ({
        url: `structures`,
        method: 'POST',
        body,
      }),
    }),
    updateStructures: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `structures/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteStructures: builder.mutation({
      query: (id) => ({ url: `structures/${id}`, method: 'DELETE' }),
    }),
    /* USERS */
    getUsers: builder.query({
      query: () => 'users',
    }),
    addUsers: builder.mutation({
      query: (body) => ({
        url: `users`,
        method: 'POST',
        body,
      }),
    }),
    updateUsers: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteUsers: builder.mutation({
      query: (id) => ({ url: `users/${id}`, method: 'DELETE' }),
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetBrandsQuery,
  useAddBrandsMutation,
  useUpdateBrandsMutation,
  useDeleteBrandsMutation,

  useGetCategoriesQuery,
  useAddCategoriesMutation,
  useUpdateCategoriesMutation,
  useDeleteCategoriesMutation,

  useGetOrganizationsQuery,
  useAddOrganizationsMutation,
  useDeleteOrganizationsMutation,
  useGetOrganizationQuery,
  useUpdateOrganizationsMutation,

  useGetProductsQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,

  useGetStructuresQuery,
  useAddStructuresMutation,
  useUpdateStructuressMutation,
  useDeleteStructuresMutation,

  useGetUsersQuery,
  useAddUsersMutation,
  useUpdateUsersMutation,
  useDeleteUserssMutation,
} = projectApi;

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
    /* CATEGORIES */
    getCategories: builder.query({
      query: () => `categories`,
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
    getOrganization: builder.query({
      query: (id) => `organization/${id}`,
      providesTags: (result, error, id) => [{ type: 'Organization', id }],
    }),
    /* PRODUCTS */
    getProducts: builder.query({
      query: () => `products`,
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
    /* QUANTITIES */
    /* ... */
    /* STRUCTURES */
    getStructures: builder.query({
      query: () => 'structures',
    }),
    /* USERS */
    getUsers: builder.query({
      query: () => 'users',
    }),
    getUsersById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetBrandsQuery,
  useGetCategoriesQuery,

  useGetOrganizationsQuery,
  useAddOrganizationMutation,
  useDeleteOrganizationMutation,

  useGetProductByIdQuery,
  useGetProductsQuery,

  useGetStructuresQuery,

  useGetUsersQuery,
  useGetUsersByIdQuery,
} = projectApi;

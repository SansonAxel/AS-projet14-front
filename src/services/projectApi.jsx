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
      query: (id) => `organizations/${id}`,
      providesTags: (result, error, id) => [{ type: 'Organization', id }],
    }),
    updateOrganization: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `organization/${id}`,
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
  useGetOrganizationQuery,
  useUpdateOrganizationMutation,

  useGetProductByIdQuery,
  useGetProductsQuery,

  useGetStructuresQuery,

  useGetUsersQuery,
  useGetUsersByIdQuery,
} = projectApi;

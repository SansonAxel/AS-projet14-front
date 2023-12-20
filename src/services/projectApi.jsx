import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

export const getToken = () => {
  return Cookies.get('token');
};

const userCookie = Cookies.get('user');

export const getRole = () => {
  if (userCookie) {
    const userData = JSON.parse(userCookie);
    const userRole = userData.roles[0];
    return userRole;
  }
  return null;
};

const role = getRole();

export const getOrganizationId = () => {
  if (userCookie && role !== 'ROLE_SUPERADMIN') {
    const userData = JSON.parse(userCookie);
    const userOrganizationId = userData.organizations.id;
    return userOrganizationId;
  }
  return null;
};

export const getStructureId = () => {
  if (userCookie && role !== 'ROLE_SUPERADMIN' && role !== 'ROLE_ADMIN') {
    const userData = JSON.parse(userCookie);
    const userStructuresId = userData.structures.id;
    return userStructuresId;
  }
  return null;
};

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sansonaxel-server.eddi.cloud/api/',
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
    updateOrganizationsStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `organizations/${id}`,
        method: 'PATCH',
        body: { status },
      }),
    }),
    deleteOrganizations: builder.mutation({
      query: (id) => ({ url: `organizations/${id}`, method: 'DELETE' }),
    }),
    /* PRODUCTS */
    getProducts: builder.query({
      query: () => {
        const organizationId = getOrganizationId();
        const structureId = getStructureId();
        const userRole = getRole();
        if (userRole === 'ROLE_SUPERADMIN') {
          return { url: 'products' };
        }
        if (userRole === 'ROLE_ADMIN') {
          return {
            url: `organizations/${organizationId}/products`,
          };
        }
        if (userRole === 'ROLE_MANAGER' || userRole === 'ROLE_LOGISTICIAN') {
          return {
            url: `structures/${structureId}/products`,
          };
        }
        return null;
      },
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
      query: () => {
        const userRole = getRole();
        const organizationId = getOrganizationId();
        if (userRole === 'ROLE_ADMIN') {
          return {
            url: `organizations/${organizationId}/structures`,
          };
        }
        return {
          url: 'structures',
        };
      },
    }),
    addStructures: builder.mutation({
      query: (body) => {
        const organizationId = getOrganizationId();
        return {
          url: `structures`,
          method: 'POST',
          body: {
            organizations: {
              id: organizationId,
            },
            ...body,
          },
        };
      },
    }),
    updateStructures: builder.mutation({
      query: ({ id, ...patch }) => {
        const organizationId = getOrganizationId();
        return {
          url: `structures/${id}`,
          method: 'PATCH',
          body: {
            organizations: {
              id: organizationId,
            },
            ...patch,
          },
        };
      },
    }),
    deleteStructures: builder.mutation({
      query: (id) => ({ url: `structures/${id}`, method: 'DELETE' }),
    }),
    /* USERS */
    getUsers: builder.query({
      query: () => {
        const organizationId = getOrganizationId();
        const structureId = getStructureId();
        const userRole = getRole();
        if (userRole === 'ROLE_SUPERADMIN') {
          return { url: 'users' };
        }
        if (userRole === 'ROLE_ADMIN') {
          return {
            url: `organizations/${organizationId}/users`,
          };
        }
        if (userRole === 'ROLE_MANAGER') {
          return {
            url: `structures/${structureId}/users`,
          };
        }
        return null;
      },
    }),
    addUsers: builder.mutation({
      query: (body) => {
        const userRole = getRole();
        const organizationId = getOrganizationId();
        const structuresId = getStructureId();
        if (userRole === 'ROLE_SUPERADMIN') {
          return {
            url: `users`,
            method: 'POST',
            body: {
              structures: {
                id: 0,
              },
              ...body,
            },
          };
        }
        if (userRole === 'ROLE_ADMIN') {
          return {
            url: `users`,
            method: 'POST',
            body: {
              organizations: {
                id: organizationId,
              },
              ...body,
            },
          };
        }
        if (userRole === 'ROLE_MANAGER') {
          return {
            url: `users`,
            method: 'POST',
            body,
          };
        }
        return null;
      },
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
  useUpdateOrganizationsStatusMutation,

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

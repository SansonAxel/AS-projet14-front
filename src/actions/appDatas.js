// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { projectApi } from '../services/projectApi';

// export const FETCH_DATA = 'FETCH_DATA';

// export const fetchData = createAsyncThunk(
//   'data/fetchData',
//   async (entityType) => {
//     switch (entityType) {
//       case 'brands':
//         return projectApi.useGetBrandsQuery();
//       case 'categories':
//         return projectApi.useGetCategoriesQuery();
//       case 'organizations':
//         return projectApi.useGetOrganizationsQuery();
//       case 'products':
//         return projectApi.useGetProductsQuery();
//       case 'structures':
//         return projectApi.useGetStructuresQuery();
//       case 'users':
//         return projectApi.useGetUsersQuery();
//       default:
//         throw new Error(`Invalid entityType: ${entityType}`);
//     }
//   }
// );

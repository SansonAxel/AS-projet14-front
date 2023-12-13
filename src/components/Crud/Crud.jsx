/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { DataGrid, frFR, GridActionsCellItem } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import './Crud.scss';
// eslint-disable-next-line import/no-cycle
import Page from '../Page/Page';
import Toolbar from './Toolbar/Toolbar';
import { projectApi } from '../../services/projectApi';
import {
  userConfig,
  productConfig,
  organizationConfig,
  brandConfig,
  categoryConfig,
  structureConfig,
} from '../../crudsConfig/crudsConfig';
import ModalForm from './Modal/Modal';

const Crud = ({ entityType }) => {
  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: '#ebad36',
  //     },
  //   },
  // });

  /* DATAS */
  // const [skip, setSkip] = useState(true);
  /* MODAL */
  const [isOpenModalForm, setIsOpenModalForm] = useState(false);

  const handleOpenModalForm = () => {
    setIsOpenModalForm(true);
  };

  const handleCloseModalForm = () => {
    setIsOpenModalForm(false);
  };

  let query;
  let config;

  switch (entityType) {
    case 'brands':
      query = projectApi.useGetBrandsQuery;
      config = brandConfig;
      break;
    case 'categories':
      query = projectApi.useGetCategoriesQuery;
      config = categoryConfig;
      break;
    case 'organizations':
      query = projectApi.useGetOrganizationsQuery;
      config = organizationConfig;
      break;
    case 'products':
      query = projectApi.useGetProductsQuery;
      config = productConfig;
      break;
    case 'structures':
      query = projectApi.useGetStructuresQuery;
      config = structureConfig;
      break;
    case 'users':
      query = projectApi.useGetUsersQuery;
      config = userConfig;
      break;

    default:
      console.error(`Invalid entityType: ${entityType}`);
      return null;
  }

  const { data, error, isLoading, refetch } = query({
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) {
    content = <>Chargement...</>;
  } else if (error) {
    content = <>Erreur lors du chargement des données</>;
  } else {
    const { columns, rowMapFunction } = config;

    const updatedColumns = [
      ...columns,
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              className="textPrimary"
              onClick={() => {
                console.log('edit');
              }}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => {
                console.log('delete');
              }}
              color="inherit"
            />,
          ];
        },
      },
    ];

    content = (
      // <ThemeProvider theme={theme}>
      <div className="List">
        <DataGrid
          rows={data.map(rowMapFunction)}
          columns={updatedColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
            // rows: data.map(rowMapFunction),
          }}
          pageSizeOptions={[15, 30, 60]}
          slots={{
            toolbar: Toolbar,
          }}
          slotProps={{
            toolbar: {
              handleOpenModalForm,
            },
          }}
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        />
        <ModalForm
          isOpenModalForm={isOpenModalForm}
          handleCloseModalForm={handleCloseModalForm}
          refetch={refetch}
        />
      </div>
      // </ThemeProvider>
    );
  }

  return (
    <Page>
      <div className="Crud">{content}</div>
    </Page>
  );
};

Crud.propTypes = {
  entityType: PropTypes.string,
};

Crud.defaultProps = {
  entityType: '',
};

export default Crud;

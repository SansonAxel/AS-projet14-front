/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, frFR, GridActionsCellItem } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import './Crud.scss';
// eslint-disable-next-line import/no-cycle
import Page from '../Page/Page';
import Toolbar from './Toolbar/Toolbar';
import { projectApi, useGetOrganizationQuery } from '../../services/projectApi';
import {
  userConfig,
  productConfig,
  organizationConfig,
  brandConfig,
  categoryConfig,
  structureConfig,
} from '../../crudsConfig/crudsConfig';
import ModalFormCreate from './ModalFormCreate/ModalFormCreate';
import ModalDelete from './ModalDelete/ModalDelete';
import ModalFormPatch from './ModalFormPatch/ModalFormPatch';
import { fetchOrganization } from '../../actions/oganization';

const Crud = ({ entityType }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#701f99',
      },
    },
  });

  /* DATAS */
  // const [skip, setSkip] = useState(true);
  /* MODAL */
  const [isOpenModalFormCreate, setIsOpenModalFormCreate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
  const [isOpenModalFormPatch, setIsOpenModalFormPatch] = useState(false);

  const [deleteItemId, setDeleteItemId] = useState(null);
  const [editItemId, setEditItemId] = useState(null);
  /* EDIT */
  const dispatch = useDispatch();
  const organizationData = useSelector((state) => state.organization);

  const handleOpenModalFormCreate = () => {
    setIsOpenModalFormCreate(true);
  };

  const handleCloseModalFormCreate = () => {
    setIsOpenModalFormCreate(false);
  };

  const handleOpenModalDelete = (id) => {
    setIsOpenModalDelete(true);
    setDeleteItemId(id);
  };

  const handleCloseModalDelete = () => {
    setIsOpenModalDelete(false);
  };

  const handleOpenModalFormPatch = (id) => {
    setEditItemId(id);
    setIsOpenModalFormPatch(true);
    dispatch(fetchOrganization(id));
    console.log('ID transmis à fetchOrganization :', id);
    console.log(organizationData);
  };

  const handleCloseModalFormPatch = () => {
    setIsOpenModalFormPatch(false);
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
                console.log('edit', id);
                handleOpenModalFormPatch(id);
              }}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => {
                console.log('delete', id);
                handleOpenModalDelete(id);
              }}
              color="inherit"
            />,
          ];
        },
      },
    ];

    content = (
      <ThemeProvider theme={theme}>
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
                handleOpenModalFormCreate,
              },
            }}
            localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
          />
          <ModalFormCreate
            isOpenModalFormCreate={isOpenModalFormCreate}
            handleCloseModalFormCreate={handleCloseModalFormCreate}
            refetch={refetch}
          />
          <ModalFormPatch
            isOpenModalFormPatch={isOpenModalFormPatch}
            handleCloseModalFormPatch={handleCloseModalFormPatch}
            refetch={refetch}
          />
          <ModalDelete
            isOpenModalDelete={isOpenModalDelete}
            handleCloseModalDelete={handleCloseModalDelete}
            refetch={refetch}
            deleteItemId={deleteItemId}
          />
        </div>
      </ThemeProvider>
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

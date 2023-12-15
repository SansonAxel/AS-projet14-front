/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
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
import { projectApi } from '../../services/projectApi';
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

  const [deleteItemId, setDeleteItemId] = useState(null);
  /* EDIT */
  const dispatch = useDispatch();
  const organizationData = useSelector(
    (state) => state.organization.organization
  );
  const isOpenModal = useSelector((state) => state.modal.isOpen);

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

  let query;
  let config;
  let entityName;

  switch (entityType) {
    case 'brands':
      query = projectApi.useGetBrandsQuery;
      config = brandConfig;
      entityName = 'marque';
      break;
    case 'categories':
      query = projectApi.useGetCategoriesQuery;
      config = categoryConfig;
      entityName = 'catégorie';
      break;
    case 'organizations':
      query = projectApi.useGetOrganizationsQuery;
      config = organizationConfig;
      entityName = 'association';
      break;
    case 'products':
      query = projectApi.useGetProductsQuery;
      config = productConfig;
      entityName = 'produit';
      break;
    case 'structures':
      query = projectApi.useGetStructuresQuery;
      config = structureConfig;
      entityName = 'antenne';
      break;
    case 'users':
      query = projectApi.useGetUsersQuery;
      config = userConfig;
      entityName = 'utilisateur';
      break;

    default:
      console.error(`Invalid entityType: ${entityType}`);
      return null;
  }

  const { data, error, isLoading, refetch } = query({
    refetchOnMountOrArgChange: true,
  });

  const currentEntityName = entityName;

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
                dispatch(fetchOrganization(id));
              }}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => {
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
            currentEntityName={currentEntityName}
            entityType={entityType}
          />
          <ModalFormPatch
            isOpenModal={isOpenModal}
            refetch={refetch}
            dataObject={organizationData}
            currentEntityName={currentEntityName}
            entityType={entityType}
          />

          <ModalDelete
            isOpenModalDelete={isOpenModalDelete}
            handleCloseModalDelete={handleCloseModalDelete}
            refetch={refetch}
            deleteItemId={deleteItemId}
            currentEntityName={currentEntityName}
            entityType={entityType}
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

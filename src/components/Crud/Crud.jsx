/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, frFR, GridActionsCellItem } from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import SecurityIcon from '@mui/icons-material/Security';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LinearProgress from '@mui/material/LinearProgress';

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
import {
  fetchBrands,
  fetchCategories,
  fetchOrganizations,
  fetchProducts,
  fetchStructures,
  fetchUsers,
} from '../../actions/entities';
import { openModal } from '../../actions/modalActions';

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
  const [snackbar, setSnackbar] = React.useState(null);

  /* EDIT */
  const dispatch = useDispatch();

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

  const handleCloseSnackbar = () => setSnackbar(null);

  const handleOpenModalPatch = (id) => {
    switch (entityType) {
      case 'brands':
        dispatch(fetchBrands(id));
        break;
      case 'categories':
        dispatch(fetchCategories(id));
        break;
      case 'organizations':
        dispatch(fetchOrganizations(id));
        dispatch(openModal());
        break;
      case 'products':
        dispatch(fetchProducts(id));
        break;
      case 'structures':
        dispatch(fetchStructures(id));
        break;
      case 'users':
        dispatch(fetchUsers(id));
        break;
      default:
        console.error(`Invalid entityType: ${entityType}`);
        break;
    }
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
    console.log(data);

    let rows = [];

    if (Array.isArray(data)) {
      rows = data.map(rowMapFunction);
    } else if (Array.isArray(data.users)) {
      rows = data.users.map(rowMapFunction);
    } else if (Array.isArray(data.structures)) {
      rows = data.structures.map(rowMapFunction);
    } else if (Array.isArray(data.products)) {
      rows = data.products.map(rowMapFunction);
    }

    console.log(rows);
    const updatedColumns = [
      ...columns,
      {
        field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ({ id }) => {
          const actions = [
            <GridActionsCellItem
              icon={<EditIcon />}
              key={`edit_${id}`}
              label="Edit"
              className="textPrimary"
              onClick={() => {
                handleOpenModalPatch(id);
              }}
              color="inherit"
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              key={`delete_${id}`}
              label="Delete"
              onClick={() => {
                handleOpenModalDelete(id);
              }}
              color="inherit"
            />,
          ];
          return actions;
        },
      },
    ];

    content = (
      <ThemeProvider theme={theme}>
        <div className="List">
          <DataGrid
            rows={rows}
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
          {!!snackbar && (
            <Snackbar
              open
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              onClose={handleCloseSnackbar}
              autoHideDuration={6000}
            >
              <Alert {...snackbar} onClose={handleCloseSnackbar} />
            </Snackbar>
          )}
          <ModalFormCreate
            isOpenModalFormCreate={isOpenModalFormCreate}
            handleCloseModalFormCreate={handleCloseModalFormCreate}
            refetch={refetch}
            currentEntityName={currentEntityName}
            entityType={entityType}
            setSnackbar={setSnackbar}
          />
          <ModalFormPatch
            isOpenModal={isOpenModal}
            refetch={refetch}
            currentEntityName={currentEntityName}
            entityType={entityType}
            setSnackbar={setSnackbar}
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

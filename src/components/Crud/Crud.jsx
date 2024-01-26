/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DataGrid, frFR, GridActionsCellItem } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

import './Crud.scss';
// eslint-disable-next-line import/no-cycle
import Page from '../Page/Page';
import Toolbar from './Toolbar/Toolbar';

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
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const Crud = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#701f99',
      },
    },
  });
  const location = useLocation();
  const currentEntity = location.pathname.split('/')[1];
  /* MODAL */
  const [isOpenModalFormCreate, setIsOpenModalFormCreate] = useState(false);
  const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

  const [deleteItemId, setDeleteItemId] = useState(null);
  const [snackbar, setSnackbar] = React.useState(null);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const userCookie = Cookies.get('user');

  const getRole = () => {
    if (userCookie) {
      const userData = JSON.parse(userCookie);
      const userRole = userData.roles[0];
      return userRole;
    }
    return null;
  };

  const role = getRole();

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
    switch (currentEntity) {
      case 'marques':
        dispatch(fetchBrands(id));
        break;
      case 'categories':
        dispatch(fetchCategories(id));
        break;
      case 'associations':
        dispatch(fetchOrganizations(id));
        break;
      case 'produits':
        dispatch(fetchProducts(id));
        break;
      case 'antennes':
        dispatch(fetchStructures(id));
        break;
      case 'utilisateurs':
        dispatch(fetchUsers(id));
        break;
      default:
        break;
    }
  };

  let config;

  switch (currentEntity) {
    case 'marques':
      config = brandConfig;
      break;
    case 'categories':
      config = categoryConfig;
      break;
    case 'associations':
      config = organizationConfig;
      break;
    case 'produits':
      config = productConfig;
      break;
    case 'antennes':
      config = structureConfig;
      break;
    case 'utilisateurs':
      config = userConfig;
      break;
    default:
      return null;
  }

  const { data, error, isLoading, refetch } = config.query({});
  let content;
  if (isLoading) {
    content = <Loader />;
  } else if (error) {
    content = <>Erreur lors du chargement des données</>;
  } else {
    const { columns, rowMapFunction } = config;
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

    // Condition pour masquer des colonnes en vue mobile
    const updatedColumns = isMobileView
      ? columns.filter(
          (column) =>
            column.field !== 'brand' &&
            column.field !== 'category' &&
            column.field !== 'price' &&
            column.field !== 'conditioning' &&
            column.field !== 'conservationType' &&
            column.field !== 'email' &&
            column.field !== 'phoneNumber'
        )
      : [...columns];

    const isSuperAdmin = role === 'ROLE_SUPERADMIN';
    const isManager = role === 'ROLE_MANAGER';
    const isLogistician = role === 'ROLE_LOGISTICIAN';
    const isMarqueEntity = currentEntity === 'marques';
    const isCategorieEntity = currentEntity === 'categories';
    const isStructureEntity = currentEntity === 'antennes';

    const forbiddenEditOrDelete =
      (isManager && isMarqueEntity) ||
      (isLogistician && isMarqueEntity) ||
      (isManager && isCategorieEntity) ||
      (isLogistician && isCategorieEntity) ||
      (isSuperAdmin && isStructureEntity);

    if (!forbiddenEditOrDelete) {
      updatedColumns.push({
        field: 'actions',
        type: 'actions',
        headerName: '',
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
      });
    }

    content = (
      <ThemeProvider theme={theme}>
        <DataGrid
          rows={rows}
          columns={updatedColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
          pageSizeOptions={[10, 30, 60]}
          slots={{
            toolbar: Toolbar,
          }}
          slotProps={{
            toolbar: {
              handleOpenModalFormCreate,
              refetch,
              currentEntity,
              role,
            },
          }}
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
          sx={{ '&, [class^=MuiDataGrid]': { border: 'none' } }}
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
          currentEntity={currentEntity}
          setSnackbar={setSnackbar}
        />
        <ModalFormPatch
          isOpenModal={isOpenModal}
          refetch={refetch}
          currentEntity={currentEntity}
          setSnackbar={setSnackbar}
        />
        <ModalDelete
          isOpenModalDelete={isOpenModalDelete}
          handleCloseModalDelete={handleCloseModalDelete}
          refetch={refetch}
          deleteItemId={deleteItemId}
          currentEntity={currentEntity}
          setSnackbar={setSnackbar}
        />
      </ThemeProvider>
    );
  }

  return (
    <Page>
      {error && error.data && error.data.code === 401 ? (
        <Error errorType={401} errorMessage="Veuillez vous reconnecter" />
      ) : (
        <div className="Crud">{content}</div>
      )}
    </Page>
  );
};

export default Crud;

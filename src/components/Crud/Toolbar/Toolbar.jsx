import PropTypes from 'prop-types';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';

import './Toolbar.scss';

const Toolbar = ({
  handleOpenModalFormCreate,
  refetch,
  currentEntity,
  role,
}) => {
  const handleAddClick = () => {
    handleOpenModalFormCreate();
  };
  const isSuperAdmin = role === 'ROLE_SUPERADMIN';
  const isManager = role === 'ROLE_MANAGER';
  const isLogistician = role === 'ROLE_LOGISTICIAN';
  const isMarqueEntity = currentEntity === 'marques';
  const isCategorieEntity = currentEntity === 'categories';
  const isStructureEntity = currentEntity === 'antennes';
  return (
    <div className="Toolbar">
      <GridToolbarContainer>
        <GridToolbarDensitySelector />
        {!(isLogistician && (isMarqueEntity || isCategorieEntity)) &&
          !(isManager && (isMarqueEntity || isCategorieEntity)) &&
          !(isSuperAdmin && isStructureEntity) && (
            <Button
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleAddClick}
            >
              Ajouter
            </Button>
          )}
        <Button color="primary" startIcon={<RefreshIcon />} onClick={refetch}>
          Actualiser
        </Button>
      </GridToolbarContainer>
    </div>
  );
};

Toolbar.propTypes = {
  handleOpenModalFormCreate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  currentEntity: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Toolbar;

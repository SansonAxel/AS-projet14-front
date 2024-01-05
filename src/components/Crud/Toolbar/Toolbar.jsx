import PropTypes from 'prop-types';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridRowModes,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import './Toolbar.scss';

const Toolbar = ({ handleOpenModalFormCreate }) => {
  const handleAddClick = () => {
    handleOpenModalFormCreate();
  };

  return (
    <div className="Toolbar">
      <GridToolbarContainer>
        <GridToolbarDensitySelector />
        <GridToolbarExport />
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          Ajouter
        </Button>
      </GridToolbarContainer>
    </div>
  );
};

Toolbar.propTypes = {
  handleOpenModalFormCreate: PropTypes.func.isRequired,
};

export default Toolbar;

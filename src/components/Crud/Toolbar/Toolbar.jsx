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

const Toolbar = ({ handleOpenModalForm }) => {
  const handleAddClick = () => {
    handleOpenModalForm();
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
  handleOpenModalForm: PropTypes.func.isRequired,
};

export default Toolbar;

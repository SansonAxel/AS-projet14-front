import PropTypes from 'prop-types';
import {
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import './Toolbar.scss';

const Toolbar = ({ handleAddClick }) => {
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
  handleAddClick: PropTypes.func.isRequired,
};

export default Toolbar;

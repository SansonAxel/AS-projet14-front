import PropTypes from 'prop-types';

import { DataGrid, frFR } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '../Toolbar/Toolbar';
import './List.scss';

const List = ({ rowsData, columnsData, handleAddClick }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ebad36',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="List">
        <DataGrid
          rows={rowsData}
          columns={columnsData}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 15 },
            },
          }}
          pageSizeOptions={[15, 30, 60]}
          disableRowSelectionOnClick
          experimentalFeatures={{ ariaV7: true }}
          slots={{
            toolbar: Toolbar,
          }}
          slotProps={{ toolbar: { handleAddClick } }}
          localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        />
      </div>
    </ThemeProvider>
  );
};

List.propTypes = {
  rowsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnsData: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
  handleAddClick: PropTypes.func.isRequired,
};

export default List;

import PropTypes from 'prop-types';

import { DataGrid } from '@mui/x-data-grid';
import './List.scss';

const List = ({ rows, columns }) => {
  return (
    <div className="List">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 15 },
          },
        }}
        pageSizeOptions={[15, 30, 60]}
      />
    </div>
  );
};

List.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
      width: PropTypes.number,
    })
  ).isRequired,
};

export default List;

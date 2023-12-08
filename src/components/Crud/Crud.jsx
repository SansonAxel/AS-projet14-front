import PropTypes from 'prop-types';
import './Crud.scss';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import Page from '../Page/Page';

const Crud = () => {
  return (
    <Page>
      <div className="Crud">Crud</div>
    </Page>
  );
};

Crud.propTypes = {};
export default Crud;

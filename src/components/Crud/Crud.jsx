/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
import './Crud.scss';
/* eslint import/no-cycle: [2, { maxDepth: 1 }] */

import Page from '../Page/Page';
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from '../../services/products';

const Crud = () => {
  const { data, error, isLoading } = useGetProductsQuery();

  return (
    <Page>
      <div className="Crud">Crud</div>
      {/* <button type="button" onClick={handleProducts}>
        Produits
      </button> */}

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          {data.map((element) => (
            <li key={element.id}>{element.name}</li>
          ))}
        </ul>
      ) : null}
    </Page>
  );
};

Crud.propTypes = {};
export default Crud;

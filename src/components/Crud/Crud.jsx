import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Crud.scss';
// eslint-disable-next-line import/no-cycle
import Page from '../Page/Page';
import List from './List/List';
import { projectApi } from '../../services/projectApi';
import {
  userConfig,
  productConfig,
  organizationConfig,
  brandConfig,
  categoryConfig,
  structureConfig,
} from '../../crudsConfig/crudsConfig';

const Crud = ({ entityType }) => {
  const [skip, setSkip] = useState(true);

  let query;
  let config;

  switch (entityType) {
    case 'brands':
      query = projectApi.useGetBrandsQuery;
      config = brandConfig;
      break;
    case 'categories':
      query = projectApi.useGetCategoriesQuery;
      config = categoryConfig;
      break;
    case 'organizations':
      query = projectApi.useGetOrganizationsQuery;
      config = organizationConfig;
      break;
    case 'products':
      query = projectApi.useGetProductsQuery;
      config = productConfig;
      break;
    case 'structures':
      query = projectApi.useGetStructuresQuery;
      config = structureConfig;
      break;
    case 'users':
      query = projectApi.useGetUsersQuery;
      config = userConfig;
      break;

    default:
      console.error(`Invalid entityType: ${entityType}`);
      return null;
  }

  const { data, error, isLoading } = query({ skip });

  let content;

  if (isLoading) {
    content = <>Chargement...</>;
  } else if (error) {
    content = <>Erreur lors du chargement des données</>;
  } else {
    const { columns, mapFunction } = config;
    content = (
      <List
        rows={data.map(mapFunction)}
        columns={columns}
        headers={columns.map((column) => column.headerName)}
      />
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

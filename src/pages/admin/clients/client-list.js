import React, { useEffect, useState } from 'react';
import { Card, Nav, Navbar, Table } from 'react-bootstrap';
import { FaUserCog } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { getClientList } from '../../../store/users/clients/list-slice';

const columns = [
  {
    name: 'lastName',
    label: 'Nom',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'firstName',
    label: 'Prénom',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'email',
    label: 'Adresse Email',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'phone',
    label: 'Téléphone',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'cin',
    label: 'CIN',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'governorate',
    label: 'Gouvernerat',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const ClientList = () => {
  const dispatch = useDispatch();
  const { clients, loading } = useSelector((state) => state.clientList);
  const [selectableRowsHideCheckboxes, setSelectableRowsHideCheckboxes] =
    useState(true);

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    selectableRowsOnClick: true,
    selectableRowsHideCheckboxes: true,
    onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
    },
  };

  useEffect(() => {
    dispatch(getClientList());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <MUIDataTable
        title={
          <h1>
            <span className='text-warning'> la liste</span> des clients
          </h1>
        }
        data={clients}
        columns={columns}
        options={options}
      />
    </DashboardLayout>
  );
};

export default ClientList;

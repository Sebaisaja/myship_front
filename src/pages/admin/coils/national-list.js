import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getAllNationalCoils } from '../../../store/colis/admin/national-list';

const NationalColisList = () => {
  const { nationalCoils, loading } = useSelector(
    (state) => state.nationalCoilList
  );
  const dispatch = useDispatch();
  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    download: false,
    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
  };

  const columns = [
    {
      name: '_id',
      label: 'Id',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'Nom de Expediteur',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <>{nationalCoils[tableMeta.rowIndex].expediteur.name}</>;
        },
      },
    },
    {
      name: 'Nom de Destinataire',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <>{nationalCoils[tableMeta.rowIndex].destinataire.name}</>;
        },
      },
    },
    {
      name: 'Num de colis',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{nationalCoils[tableMeta.rowIndex].coli.num}</span>;
        },
      },
    },
    {
      name: 'Montant',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{nationalCoils[tableMeta.rowIndex].price}</span>;
        },
      },
    },

    {
      name: 'méthode',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{nationalCoils[tableMeta.rowIndex].method}</span>;
        },
      },
    },
    {
      name: 'paiement',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>
              {nationalCoils[tableMeta.rowIndex].isPaid ? (
                <FaCheck color='green' />
              ) : (
                <FaTimes color='red' />
              )}
            </span>
          );
        },
      },
    },
    {
      name: 'Date',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>
              {new Date(
                nationalCoils[tableMeta.rowIndex].createdAt
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
  ];
  useEffect(() => {
    dispatch(getAllNationalCoils());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav mb-3'>
          <div className='d-flex px-1 '>
            <Link to='/dashboard/colis-nationallist'>national</Link>
            <Link to='/dashboard/colis-list'>International</Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span className='text-danger'>  liste</span> des colis national
            </h1>
          }
          data={nationalCoils}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default NationalColisList;

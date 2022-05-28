import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { getAllInternationalCoil } from '../../../store/colis/admin/international-list';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ColisList = () => {
  const { internationalCoils, loading } = useSelector(
    (state) => state.internationalCoilList
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
          return <>{internationalCoils[tableMeta.rowIndex].expediteur.name}</>;
        },
      },
    },
    {
      name: 'Nom de Destinataire',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>{internationalCoils[tableMeta.rowIndex].destinataire.name}</>
          );
        },
      },
    },
    {
      name: 'Pays',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>{internationalCoils[tableMeta.rowIndex].coli.country}</span>
          );
        },
      },
    },
    {
      name: 'Num de colis',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{internationalCoils[tableMeta.rowIndex].coli.num}</span>;
        },
      },
    },
    {
      name: 'Montant',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{internationalCoils[tableMeta.rowIndex].price}</span>;
        },
      },
    },

    {
      name: 'méthode',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{internationalCoils[tableMeta.rowIndex].method}</span>;
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
              {internationalCoils[tableMeta.rowIndex].isPaid ? (
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
                internationalCoils[tableMeta.rowIndex].createdAt
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
  ];
  useEffect(() => {
    dispatch(getAllInternationalCoil());
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
              <span className='text-danger'>  liste</span> des colis à l'international
            </h1>
          }
          data={internationalCoils}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ColisList;

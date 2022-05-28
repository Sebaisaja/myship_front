import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getAllInternationalRp } from '../../../store/rapidpostes/admin/international-list';

const InternationalRpList = () => {
  const { internationalRps, loading } = useSelector(
    (state) => state.internationalRpList
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
          return <>{internationalRps[tableMeta.rowIndex].expediteur.name}</>;
        },
      },
    },
    {
      name: 'Nom de Destinataire',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <>{internationalRps[tableMeta.rowIndex].destinataire.name}</>;
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
            <span>{internationalRps[tableMeta.rowIndex].coli.country}</span>
          );
        },
      },
    },
    {
      name: 'Montant',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{internationalRps[tableMeta.rowIndex].price}</span>;
        },
      },
    },

    {
      name: 'méthode',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{internationalRps[tableMeta.rowIndex].method}</span>;
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
              {internationalRps[tableMeta.rowIndex].isPaid ? (
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
                internationalRps[tableMeta.rowIndex].createdAt
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
  ];
  useEffect(() => {
    dispatch(getAllInternationalRp());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav mb-3'>
          <div className='d-flex px-1 '>
            <Link to='/dashboard/rapidPosts-national-list'>national</Link>
            <Link to='/dashboard/rapidPosts-international-list'>
              International
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span className='text-danger'>  liste</span> par rapide-poste à l'international
            </h1>
          }
          data={internationalRps}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default InternationalRpList;

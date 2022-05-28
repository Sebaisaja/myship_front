import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getAllInternationalCourrier } from '../../../store/lettres/admin/international-list';

const InternationalCourriersList = () => {
  const { internationalCourriers, loading } = useSelector(
    (state) => state.internationalCourrierList
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
          return (
            <>{internationalCourriers[tableMeta.rowIndex].expediteur.name}</>
          );
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
            <>{internationalCourriers[tableMeta.rowIndex].destinataire.name}</>
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
            <span>
              {internationalCourriers[tableMeta.rowIndex].coli.country}
            </span>
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
          return (
            <span>{internationalCourriers[tableMeta.rowIndex].price}</span>
          );
        },
      },
    },

    {
      name: 'méthode',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>{internationalCourriers[tableMeta.rowIndex].method}</span>
          );
        },
      },
    },
    {
      name: 'Poids',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>
              {internationalCourriers[tableMeta.rowIndex].coli.weight}g
            </span>
          );
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
              {internationalCourriers[tableMeta.rowIndex].isPaid ? (
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
                internationalCourriers[tableMeta.rowIndex].createdAt
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
  ];
  useEffect(() => {
    dispatch(getAllInternationalCourrier());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <div id='topnavbar'>
        <div className='topnav mb-3'>
          <div className='d-flex px-1 '>
            <Link to='/dashboard/courriers-national-list'>national</Link>
            <Link to='/dashboard/courriers-international-list'>
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
              <span className='text-danger'>liste des Lettres</span>{' '}
              international
            </h1>
          }
          data={internationalCourriers}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default InternationalCourriersList;

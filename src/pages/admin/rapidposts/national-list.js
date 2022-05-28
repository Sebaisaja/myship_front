import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getAllNationalRp } from '../../../store/rapidpostes/admin/national-list';

const NationalRpList = () => {
  const { nationalRapidposts, loading } = useSelector(
    (state) => state.nationalRpList
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
      name: 'Nom de Destinataire',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>{nationalRapidposts[tableMeta.rowIndex].destinataire.name}</>
          );
        },
      },
    },
    {
      name: 'Agence',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>{nationalRapidposts[tableMeta.rowIndex].expediteur.agence}</>
          );
        },
      },
    },
    {
      name: 'Contenu',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <span>{nationalRapidposts[tableMeta.rowIndex].coli.content}</span>
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
          return <span>{nationalRapidposts[tableMeta.rowIndex].price}</span>;
        },
      },
    },

    {
      name: 'méthode',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{nationalRapidposts[tableMeta.rowIndex].method}</span>;
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
              {nationalRapidposts[tableMeta.rowIndex].isPaid ? (
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
                nationalRapidposts[tableMeta.rowIndex].createdAt
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
  ];
  useEffect(() => {
    dispatch(getAllNationalRp());
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
              <span className='text-danger'>Liste</span> par  rapide-poste
              national
            </h1>
          }
          data={nationalRapidposts}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default NationalRpList;

import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { getAllInternationalCoil } from '../../../store/colis/admin/international-list';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getAllAgentColis } from '../../../store/colis/agent/agent-list';
import { Button, Spinner } from 'react-bootstrap';
import { CgSpinner } from 'react-icons/cg';
import authAxios from '../../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import { useState } from 'react';

const ColisAgentList = () => {
  const { agentColis, loading } = useSelector((state) => state.agentColiList);
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    download: false,
    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
    pagination: true,
    jumpToPage: true,
  };

  const columns = [
    {
      name: 'Client',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <>{agentColis[tableMeta.rowIndex].expediteur.name}</>;
        },
      },
    },
    {
      name: 'Num de colis',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{agentColis[tableMeta.rowIndex].coli.num}</span>;
        },
      },
    },
    {
      name: 'Montant',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return <span>{agentColis[tableMeta.rowIndex].price} mi </span>;
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
                agentColis[tableMeta.rowIndex].createdAt
              ).toLocaleDateString('en')}
            </span>
          );
        },
      },
    },
    {
      name: 'statut',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              {agentColis[tableMeta.rowIndex].isPaid ? (
                <Button size='sm' variant='success'>
                  <FaCheck color='white' size={'0.5rem'} />
                </Button>
              ) : (
                <Button size='sm' variant='danger'>
                  <Spinner
                    animation='border'
                    role='status'
                    style={{
                      width: '12px',
                      height: '12px',
                      margin: 'auto',
                      display: 'block',
                    }}
                  >
                    <span className='sr-only'></span>
                  </Spinner>
                </Button>
              )}
            </>
          );
        },
      },
    },
    {
      name: 'Validation',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              size='sm'
              disabled={agentColis[tableMeta.rowIndex].isPaid}
              onClick={() => onValid(agentColis[tableMeta.rowIndex]._id)}
            >
              <span className='text-xs'>Validation</span>
            </Button>
          );
        },
      },
    },
  ];

  const onValid = async (id) => {
    if (window.confirm('are you sure this order is validated?')) {
      setRefresh(false);
      try {
        const res = await authAxios.post(`colis/agent-pay/${id}`);

        if (res.data) {
          setRefresh(true);
          toast.success('order has been validated');
        } else {
        }
      } catch (error) {
        setRefresh(false);
        toast.error(setError(error));
      }
    }
  };

  useEffect(() => {
    dispatch(getAllAgentColis());
  }, [dispatch, refresh]);
  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span className='text-danger'>liste</span> des colis
            </h1>
          }
          data={agentColis}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ColisAgentList;

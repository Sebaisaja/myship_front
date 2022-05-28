import React from 'react';
import MUIDataTable from 'mui-datatables';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../components/UI/loader';
import { useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Button, Spinner } from 'react-bootstrap';
import authAxios from '../../../utils/auth-axios';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import { useState } from 'react';
import { getAllAgentCourriers } from '../../../store/lettres/agent/agent-list';

const CourrierAgentList = () => {
  const { agentCourriers, loading } = useSelector(
    (state) => state.agentCourrierList
  );
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    download: false,
    rowsPerPage: '9',
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
          return <>{agentCourriers[tableMeta.rowIndex].expediteur.name}</>;
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
            <span>{agentCourriers[tableMeta.rowIndex].coli.weight} g</span>
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
          return <span>{agentCourriers[tableMeta.rowIndex].price} mi </span>;
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
                agentCourriers[tableMeta.rowIndex].createdAt
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
              {agentCourriers[tableMeta.rowIndex].isPaid ? (
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
              disabled={agentCourriers[tableMeta.rowIndex].isPaid}
              onClick={() => onValid(agentCourriers[tableMeta.rowIndex]._id)}
            >
              <span className='text-xs'>valid</span>
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
    dispatch(getAllAgentCourriers());
  }, [dispatch, refresh]);
  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span className='text-danger'>liste des </span> des 
              lettres
            </h1>
          }
          data={agentCourriers}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default CourrierAgentList;

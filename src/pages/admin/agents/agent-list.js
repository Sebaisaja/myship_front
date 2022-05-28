import React, { useEffect, useState } from 'react';

import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import MUIDataTable from 'mui-datatables';
import { useDispatch, useSelector } from 'react-redux';
import { getAgentList } from '../../../store/users/agent/list-slice';
import Loader from '../../../components/UI/loader';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Button, Card } from 'react-bootstrap';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import toast from 'react-hot-toast';
import AddAgentModal from '../../../components/layouts/admin/form/add-agent';

const AgentList = () => {
  const dispatch = useDispatch();
  const { agents, loading } = useSelector((state) => state.agentList);
  const [refresh, setRefresh] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const onDelete = (id) => {
    if (window.confirm('are you sure ?')) {
      authAxios
        .delete(`users/${id}`)
        .then((res) => {
          toast.success('la agent a été supprimée');
          setRefresh((prev) => (prev = !prev));
        })
        .catch((e) => {
          toast.error(setError(e));
        });
    }
  };

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,

    selectableRowsOnClick: false,
    selectableRowsHideCheckboxes: true,
  };

  const columns = [
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
    {
      name: 'Paramètre',
      options: {
        filter: true,
        sort: false,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <>
              <Link
                to={`/dashboard/agent-update/${agents[tableMeta.rowIndex]._id}`}
                className='me-2 btn btn-sm btn-info text-white'
              >
                <FaEdit />
              </Link>
              <Button
                onClick={() => onDelete(agents[tableMeta.rowIndex]._id)}
                size='sm'
                variant='danger'
              >
                <FaTrash />
              </Button>
            </>
          );
        },
      },
    },
  ];
  useEffect(() => {
    dispatch(getAgentList());
  }, [dispatch, refresh]);

  return (
    <DashboardLayout>
      <Card.Header className='card-header d-flex  justify-content-between'>
        <h5 className='mb-0 text-white'></h5>
        <h6>
          <Button
            onClick={handleShow}
            variant=''
            className='bg-red-600 text-white'
            size='sm'
          >
            Ajouter un Agent
          </Button>
        </h6>
      </Card.Header>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <span className='text-warning'>Liste</span> des agents
            </h1>
          }
          data={agents}
          columns={columns}
          options={options}
        />
      )}
      <AddAgentModal show={show} handleClose={handleClose} />
    </DashboardLayout>
  );
};

export default AgentList;

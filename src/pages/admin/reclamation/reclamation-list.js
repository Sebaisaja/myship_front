import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardLayout from '../../../components/layouts/admin/dashboard-layout';
import Loader from '../../../components/UI/loader';
import { getAllReclamation } from '../../../store/reclamation/list-slice';
import MUIDataTable from 'mui-datatables';
import toast from 'react-hot-toast';
import { setError } from '../../../utils/error';
import authAxios from '../../../utils/auth-axios';

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
    name: 'username',
    label: 'Nom et Prénom',
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
    name: 'address',
    label: 'Adresse',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'envoiId',
    label: 'Envoi Id',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'message',
    label: 'Message',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const ReclamationList = () => {
  const { reclamations, loading } = useSelector(
    (state) => state.getAllReclamation
  );
  const dispatch = useDispatch();

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
    print: false,
    rowHover: true,
    selectableRowsOnClick: true,
    selectableRowsHideCheckboxes: true,
    onRowsDelete: (rowsDeleted, dataRows) => {
      const idsToDelete = rowsDeleted.data.map(
        (d) => reclamations[d.dataIndex]._id
      ); // array of all ids to to be deleted

      authAxios
        .delete(`/reclamation/${idsToDelete[0]}`)
        .then((res) => {
          toast.success('la réclamation a été supprimée');
        })
        .catch((e) => {
          toast.error(setError(e));
        });
    },
  };

  useEffect(() => {
    dispatch(getAllReclamation());
  }, [dispatch]);

  return (
    <DashboardLayout>
      {loading ? (
        <Loader />
      ) : (
        <MUIDataTable
          title={
            <h1>
              <em>
                <span className='text-warning'> Liste</span> des Réclamation
              </em>
            </h1>
          }
          data={reclamations}
          columns={columns}
          options={options}
        />
      )}
    </DashboardLayout>
  );
};

export default ReclamationList;

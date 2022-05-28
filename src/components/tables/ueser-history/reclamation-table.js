import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AiOutlineDown } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';

const UserReclamationTable = ({ reclamations }) => {
  const [show, setShow] = useState(false);

  const deleteHandler = (id) => {
    if (window.confirm('êtes-vous sûr de vouloir supprimer')) {
      authAxios
        .delete(`/colis/${id}`)
        .then((res) => {
          toast.success('a été supprimé');
        })
        .catch((e) => toast.error(setError(e)));
    }
  };

  return (
    <Card className=' shadow border-0 mb-2 '>
      <Card.Header className='card-header d-flex  justify-content-between'>
        <h3 className='mb-0  '>
          <em>
            <span className='text-warning me-2'>Historique</span>
            des reclamations
          </em>
        </h3>
        <h6>
          <AiOutlineDown
            onClick={() => setShow((prev) => (prev = !prev))}
            size={'1rem'}
            className=' text-slate pull-right'
          />
        </h6>
      </Card.Header>

      {show && (
        <Table responsive hover className='table-nowrap '>
          <thead
            style={{ backgroundColor: ' rgba(22, 34, 57, 0.95)' }}
            className='text-white'
          >
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>message</th>
              <th scope='col'>Envoi Id</th>
              <th scope='col'>Date</th>
              <th scope='col'>Status</th>
              <th scope='col'>
                <FaTrash size={'1rem'} />
              </th>
            </tr>
          </thead>
          <tbody>
            {reclamations.map((reclamation) => (
              <tr key={reclamation._id}>
                <td>{reclamation?._id}</td>
                <td>{reclamation?.message?.substring(0, 50)}</td>
                <td>{reclamation?.envoiId}</td>

                <td>
                  {new Date(reclamation?.createdAt).toLocaleDateString('en')}
                </td>
                <td>en attente</td>
                <td>
                  <FaTrash
                    onClick={() => deleteHandler(reclamation?._id)}
                    color='red'
                    className=' cursor-pointer'
                    size={'1rem'}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
};

export default UserReclamationTable;

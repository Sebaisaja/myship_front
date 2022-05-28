import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import { AiOutlineDown } from 'react-icons/ai';
import { FaCheck, FaPrint, FaTimes, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';
import toast from 'react-hot-toast';

const UserCurriersTable = ({ courriers, setRefresh }) => {
  const [show, setShow] = useState(false);

  const deleteHandler = (id) => {
    if (window.confirm('êtes-vous sûr de vouloir supprimer')) {
      authAxios
        .delete(`/lettres/${id}`)
        .then((res) => {
          toast.success('a été supprimé');
          setRefresh((prev) => (prev = !prev));
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
            des courriers
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
              <th scope='col'>Nom de Destinataire</th>
              <th scope='col'>Addresse de Destinataire</th>
              <th scope='col'>Method</th>

              <th scope='col'>Poids</th>
              <th scope='col'>Prix</th>
              <th scope='col'>Status</th>
              <th scope='col'>Date</th>
              <th scope='col'>impression</th>
              <th scope='col'>
                <FaTrash size={'1rem'} />
              </th>
            </tr>
          </thead>
          <tbody>
            {courriers.map((courrier) => (
              <tr key={courrier?._id}>
                <td>{courrier?._id}</td>
                <td>{courrier?.destinataire?.name}</td>
                <td>{courrier?.destinataire?.address}</td>
                <td>{courrier?.method}</td>
                <td>{courrier?.coli.weight}g</td>
                <td>{courrier?.price}</td>
                <td>
                  {courrier?.isPaid ? (
                    <FaCheck color='green' size={'1.2rem'} />
                  ) : (
                    <FaTimes color='red' size={'1.2rem'} />
                  )}
                </td>
                <td>
                  {new Date(courrier?.createdAt).toLocaleDateString('en')}
                </td>
                <td>
                  <Link
                    to={
                      courrier?.coli?.country
                        ? `/coils/international-print/${courrier?._id}`
                        : `/coils/national-print/${courrier?._id}`
                    }
                  >
                    <FaPrint size={'1.3rem'} />
                  </Link>
                </td>
                <td>
                  <FaTrash
                    onClick={() => deleteHandler(courrier._id)}
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

export default UserCurriersTable;

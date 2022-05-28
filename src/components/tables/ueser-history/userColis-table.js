import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { AiOutlineDown } from 'react-icons/ai';
import { FaCheck, FaPrint, FaTimes, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import authAxios from '../../../utils/auth-axios';
import { setError } from '../../../utils/error';

const UserColisTable = ({ myInternationalColis, setRefresh }) => {
  const [show, setShow] = useState(false);

  const deleteHandler = (id) => {
    if (window.confirm('êtes-vous sûr de vouloir supprimer')) {
      authAxios
        .delete(`/colis/${id}`)
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
            des colis
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
              <th scope='col'>Adresse de Destinataire</th>
              <th scope='col'>Méthode</th>
              <th scope='col'>Montant</th>
              <th scope='col'>Statut</th>
              <th scope='col'>Date</th>

              <th scope='col'>Impression</th>
              <th scope='col'>
                <FaTrash size={'1rem'} />
              </th>
            </tr>
          </thead>
          <tbody>
            {myInternationalColis.map((coli) => (
              <tr key={coli._id}>
                <td>{coli?._id}</td>
                <td>{coli?.destinataire?.name}</td>
                <td>{coli?.destinataire?.address}</td>
                <td>{coli?.method}</td>
                <td>{coli?.price}</td>

                <td>
                  {coli.isPaid ? (
                    <FaCheck color='green' size={'1.2rem'} />
                  ) : (
                    <FaTimes color='red' size={'1.2rem'} />
                  )}
                </td>
                <td>{new Date(coli.createdAt).toLocaleDateString('en')}</td>
                <td>
                  <Link
                    to={
                      coli?.coli.country
                        ? `/coils/international-print/${coli._id}`
                        : `/coils/national-print/${coli._id}`
                    }
                  >
                    <FaPrint size={'1.3rem'} />
                  </Link>
                </td>
                <td>
                  <FaTrash
                    onClick={() => deleteHandler(coli._id)}
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

export default UserColisTable;

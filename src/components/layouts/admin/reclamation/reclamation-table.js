import React from 'react';

const ReclamationTable = ({ reclamation }) => {
  return (
    <tr>
      <td>{reclamation.username}</td>
      <td>{reclamation.email}</td>
      <td>{reclamation.address}</td>
      <td>{reclamation.message.substring(0, 50)}...</td>
      <td>{new Date(reclamation.createdAt).toLocaleDateString('en')}</td>
    </tr>
  );
};

export default ReclamationTable;

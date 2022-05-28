import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
  title = 'Bienvenue Sur MyShip',
  description = "le meilleur service d'envoi",
  keywords,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

export default Meta;

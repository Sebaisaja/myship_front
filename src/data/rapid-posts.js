//courriers cards
export const rapidPosts = {
  title: 'envoyer par rapide poste ?',
  offersLink: '/rapid-poste-envoi',
  tarifsLink: '/rapid-poste-tarifs',
  buttonLink: "J'envoi par rapid poste",
  text1: 'La Norme de Rapid-Post',
  text2: 'Nos grilles de tarifs',
  image: '/colis.png',
  cards: [
    {
      id: '1',
      name: 'Affranchir sur le site',
      image: '/colis/affranchir.png',
    },
    {
      id: '2',
      name: "Imprimer l'étiquette",
      image: '/colis/imprimer.png',
    },
    {
      id: '3',
      name: "Collez l'étiquette sur votre envoi",
      image: '/colis/collez.png',
    },
    {
      id: '4',
      name: 'Disposer votre envoi dans le bureau de poste ',
      image: '/colis/disposer.png',
    },
  ],
};

//courriers page
export const rapidPosteOffers = {
  title: 'Rapid Poste',
  description: '',
  // cards: [
  //   {
  //     id: '1',
  //     name: 'Je dépose mon colis dans ma boîte aux lettres personnelle*',
  //     image:
  //       'https://www.laposte.fr/medias/sys_master/images/h0f/h6f/26585848053790/etape-01-h2s-11-2021.jpg',
  //   },
  //   {
  //     id: '2',
  //     name: 'Le facteur récupère le colis directement dans ma boîte aux lettres*',
  //     image:
  //       'https://www.laposte.fr/medias/sys_master/images/h90/hd5/26585848872990/etape-02-h2s-11-2021.jpg',
  //   },
  //   {
  //     id: '3',
  //     name: 'Le colis est ensuite acheminé sous 2 jours vers le point de retrait convenu avec votre destinataire',
  //     image:
  //       'https://www.laposte.fr/medias/sys_master/images/hd4/hac/26585849626654/etape-03-h2s-11-2021.jpg',
  //   },
  // ],
};

export const rapidPosteInterieurTarifs = {
  title: 'Tarifs des lettres du régime intérieur',
  tarifs: [
    {
      weight: '20 gr',
      price: 0.75,
    },
    {
      weight: '100 gr > 250 gr',
      price: 1.2,
    },
    {
      weight: '250 gr > 500 gr',
      price: 2.0,
    },
    {
      weight: '500 gr > 1000 gr',
      price: 2.5,
    },
    {
      weight: '1000 gr > 2000 gr',
      price: 3.5,
    },
  ],
};

export const rapidPosteInternationalTarifs = {
  title: 'Tarifs des lettres du régime international',
  tarifs: [
    {
      weight: 'Cart postale',
      uma: 1.2,
      paysArabe: 1.2,
      resteMonde: 1.5,
    },
    {
      weight: '20 gr',
      uma: 1.2,
      paysArabe: 1.2,
      resteMonde: 1.5,
    },
    {
      weight: '20 gr > 100 gr',
      uma: 1.5,
      paysArabe: 3.0,
      resteMonde: 3.0,
    },
    {
      weight: '100 gr > 250 gr',
      uma: 2.5,
      paysArabe: 5.0,
      resteMonde: 6.0,
    },
    {
      weight: '250 gr > 500 gr',
      uma: 4.0,
      paysArabe: 10.0,
      resteMonde: 12.0,
    },
    {
      weight: '500 gr > 1000 gr',
      uma: 6.0,
      paysArabe: 15.0,
      resteMonde: 18.0,
    },
    {
      weight: '1000 gr > 2000 gr',
      uma: 10.0,
      paysArabe: 20.0,
      resteMonde: 22.0,
    },
  ],
};

export const rapidPosteServicesTarifs = {
  title: 'Tarifs des services supplémentaires',
  tarifs: [
    {
      name: 'Taxe de Recommandation',
      interne: 2.5,
      international: 4.0,
    },
    {
      name: 'Accusé de Réception',
      interne: 2.4,
      international: 2.4,
    },
    {
      name: 'Taxe de la Poste Restante',
      interne: 0.5,
      international: 1.0,
    },
  ],
};

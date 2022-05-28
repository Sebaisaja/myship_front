//courriers cards
export const courriers = {
  title: 'envoyer une lettre?',
  offersLink: '/courriers-envoi',
  tarifsLink: '/courriers-tarifs',
  buttonLink: "j'envoi mon lettre",
  text1: 'La norme de lettre récommandée',
  text2: 'Nos grilles de tarifs courrier',
  image:
    'https://www.laposte.fr/medias/sys_master/images/hf8/hb0/27197322166302/01-courrier.svg',
  cards: [
    {
      id: '1',
      name: 'Affranchir sur le site',
      image: '/colis/affranchir.png',
    },
    {
      id: '2',
      name: "imprimer l'étiquette ",
      image: '/colis/imprimer.png',
    },
    {
      id: '3',
      name: "collez l'étiquette sur la lettre",
      image: '/colis/letter.png',
    },
    {
      id: '4',
      name: "disposer l'envoi dans le bureau de poste  ",
      image: '/colis/disposer.png',
    },
  ],
};

//courriers page
export const courriersOffers = {
  title: 'Lettre Recommandée',
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

export const courriersInterieurTarifs = {
  title: 'Tarifs des lettres du régime intérieur',
  tarifs: [
    {
      weight: "Lettre jusqu'à 20 gr",
      price: 0.75,
    },
    {
      weight: " Lettre>20 jusqu'à 100 gr",
      price: 1.2,
    },
    {
      weight: "Lettre>100 jusqu'à 250 gr",
      price: 2.0,
    },
    {
      weight: "Lettre>250 jusqu'à 500 gr",
      price: 2.5,
    },
    {
      weight: "Lettre>500 jusqu'à 1000 gr",
      price: 3.5,
    },
    {
      weight: 'Pour les ministéres(au-déla de 2 kg',
      price:
        "1000 DT par tranche de 1 KG ou fraction de 1 KG jusqu'à 10 KG ,par exemple 2.001 kg=4500 DT",
    },
  ],
};

export const courriersInternationalTarifs = {
  title: 'Tarifs des lettres du régime international',
  tarifs: [
    {
      weight: 'Carte postale',
      uma: 1.2,
      paysArabe: 1.2,
      resteMonde: 1.5,
    },
    {
      weight: "Lettre jusqu'à 20 gr",
      uma: 1.2,
      paysArabe: 1.2,
      resteMonde: 1.5,
    },
    {
      weight: " Lettre>20 jusqu'à 100 gr",
      uma: 1.5,
      paysArabe: 3.0,
      resteMonde: 3.0,
    },
    {
      weight: "Lettre>100 jusqu'à 250 gr",
      uma: 2.5,
      paysArabe: 5.0,
      resteMonde: 6.0,
    },
    {
      weight: "Lettre>250 jusqu'à 500 gr",
      uma: 4.0,
      paysArabe: 10.0,
      resteMonde: 12.0,
    },
    {
      weight: "Lettre>500 jusqu'à 1000 gr",
      uma: 6.0,
      paysArabe: 15.0,
      resteMonde: 18.0,
    },
    {
      weight: "Lettre>1000 jusqu'à 2000 gr",
      uma: 10.0,
      paysArabe: 20.0,
      resteMonde: 22.0,
    },
  ],
};

export const courriersServicesTarifs = {
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
export const courriersDouaneTarifs = {
  title: 'Tarifs De présentation à la douane',
  tarifs: [
    {
      name: 'Taxe de présentation à la douane',
      envoietcolis: 4.0,
      special: 6.0,
    },
  ],
};

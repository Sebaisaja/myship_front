//courriers cards
export const colis = {
  title: 'envoyer un colis ?',
  offersLink: '/colis-envoi',
  tarifsLink: '/colis-tarifs',
  buttonLink: "j'envoi mon colis",
  text1: 'Comment Ca Marche ?',
  text2: 'Nos grilles de tarifs colis',
  image:
    'https://www.laposte.fr/medias/sys_master/images/hec/h8d/27197325738014/04-kit-demenagement.svg',
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
      name: "collez l'étiquette sur le colis ",
      image: '/colis/collez.png',
    },
    {
      id: '4',
      name: 'Disposer le colis dans le bureau de poste',
      image: '/colis/disposer.png',
    },
  ],
};

//courriers page
export const colisOffers = {
  title: 'Colis Postaux',
  description: '',
  cards: [
    {
      id: '1',
      name: 'Je dépose mon colis dans le bureau de poste ',
      image:
        'https://www.laposte.fr/medias/sys_master/images/h0f/h6f/26585848053790/etape-01-h2s-11-2021.jpg',
    },
    {
      id: '2',
      name: 'Le facteur récupère le colis directement dans le bureau vers le destinataire',
      image:
        'https://www.laposte.fr/medias/sys_master/images/h90/hd5/26585848872990/etape-02-h2s-11-2021.jpg',
    },
    {
      id: '3',
      name: 'Le colis est ensuite acheminé sous 2 jours vers le point de retrait convenu avec votre destinataire ',
      image:
        'https://www.laposte.fr/medias/sys_master/images/hd4/hac/26585849626654/etape-03-h2s-11-2021.jpg',
    },
  ],
};

export const colisInterieurTarifs = {
  title: 'Tarifs des colis Postaux du régime intérieur ',
  tarifs: [
    {
      weight: 'Taxe fixe par Colis de 2 Kg',
      price: 4.3,
    },
    {
      weight: 'Taxe par 1 Kg ou fraction de 1 Kg Supplémentaire',
      price: 0.3,
    },
    // {
    //   weight: '250 gr > 500 gr',
    //   price: 2.0,
    // },
    // {
    //   weight: '500 gr > 1000 gr',
    //   price: 2.5,
    // },
    // {
    //   weight: '1000 gr > 2000 gr',
    //   price: 3.5,
    // },
  ],
};

export const colisInternationalTarifs = {
  title: 'Tarifs des colis Postaux du régime international',
  tarifs: [
    {
      weight: 'Taxe fixe par Colis de 2 Kg',
      uma: 19.0,
      paysArabe: 29.0,
      resteMonde: 40.0,
    },
    {
      weight: 'Taxe par 1 Kg ou fraction de 1 Kg supplémentaire',
      uma: 4.0,
      paysArabe: 4.0,
      resteMonde: 10.0,
    },
  ],
};

export const colisRemiseTarifs = {
  title:
    "Remises accordées aux gros dépositaires de colis octroyées sur la base du chiffre d'affaires mensuel réalisé avec la poste",
  tarifs: [
    {
      name: "De 5000 DT jusu 'à 10 000 Dt",
      remise: 5,
    },
    {
      name: "De 10 000 DT jusu'à 20 000 Dt",
      remise: 7,
    },
    {
      name: "De 20 000 DT jusu'à 10 000 Dt",
      remise: 10,
    },
    {
      name: 'Supérieur à 40 000 Dt',
      remise: 15,
    },
  ],
};
export const colisAssurenceTarifs = {
  title: " Taxe d'assurence des colis avec valeur déclarée",
  tarifs: [
    {
      montant: "Jusqu'à 500 DT",
      taxe: 5,
    },
    {
      montant: 'Pour chaque 50 Dt ou fraction de 50 Dt supplémentaire',
      taxe: 0.5,
    },
    {
      montant: 'Avec un maximum',
      taxe: 5.0,
    },
  ],
};

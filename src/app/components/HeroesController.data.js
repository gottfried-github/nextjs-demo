const page0 = {
  next: 'https://sw-api.starnavi.io/people/?page=2',
  previous: null,
  results: [
    {
      id: 10,
      name: 'Obi-Wan Kenobi',
      height: '182',
    },
    {
      id: 12,
      name: 'Wilhuff Tarkin',
    },
    {
      id: 13,
      name: 'Chewbacca',
    },
    {
      id: 14,
      name: 'Han Solo',
    },
    {
      id: 15,
      name: 'Greedo',
    },
    {
      id: 16,
      name: 'Jabba Desilijic Tiure',
    },
    {
      id: 18,
      name: 'Wedge Antilles',
    },
    {
      id: 19,
      name: 'Jek Tono Porkins',
    },
    {
      id: 20,
      name: 'Yoda',
    },
    {
      id: 21,
      name: 'Palpatine',
    },
  ],
}

const page1 = {
  next: null,
  previous: 'https://sw-api.starnavi.io/people/',
  results: [
    {
      id: 22,
      name: 'Boba Fett',
    },
    {
      id: 23,
      name: 'IG-88',
    },
    {
      id: 24,
      name: 'Bossk',
    },
    {
      id: 25,
      name: 'Lando Calrissian',
    },
    {
      id: 26,
      name: 'Lobot',
    },
    {
      id: 27,
      name: 'Ackbar',
    },
    {
      id: 28,
      name: 'Mon Mothma',
    },
    {
      id: 29,
      name: 'Arvel Crynyd',
    },
    {
      id: 30,
      name: 'Wicket Systri Warrick',
    },
    {
      id: 31,
      name: 'Nien Nunb',
    },
  ],
}

export default { page0, page1 }

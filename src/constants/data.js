import images from './images';

const tortas = [
  {
    title: 'Super Torta de Manzana',
    price: '$2500',
    tags: 'Canela | Manzana | Azucar',
  },
  {
    title: 'Lemon Pie',
    price: '$2500',
    tags: 'Limon | Merenge | Azucar',
  },
  {
    title: 'Brownie de Chocolate',
    price: 'Coming Soon...',
    tags: 'Chocolate | Dulce de Leche',
  },
];

const postres = [
  {
    title: 'Muffins',
    price: 'Coming Soon...',
    tags: '12 Unidades | Limon | Chocolate | Vainilla',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { tortas, postres, awards };

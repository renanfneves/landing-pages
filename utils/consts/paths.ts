export const PATHS = [
  {
    key: 'testimonial',
    path: '#testemunhos',
    label: 'Testemunhos',
  },
  {
    key: 'services',
    label: 'Serviços',
    children: [
      {
        key: 'estofos',
        path: '/servicos/estofos',
        label: 'Higienização de Estofos',
      },
      {
        key: 'colchoes',
        path: '/servicos/colchoes',
        label: 'Higienização de Colchões',
      },
      {
        key: 'carpetes',
        path: '/servicos/carpetes',
        label: 'Higienização de Carpetes',
      },
    ],
  },
  {
    key: 'portfolio',
    path: '#portfolio',
    label: 'Portfólio',
  },
]

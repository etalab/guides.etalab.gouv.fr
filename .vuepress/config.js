const {getSidebar} = require('vuepress-theme-gouv-fr/sidebar.js')

function sidebar () {
  data = getSidebar()

  data['/'] = [
    {
      title: 'Ouverture et circulation des données',
      collapsable: false,
      children: [
        ['/qualite/', "Comment préparer des données à l'ouverture / la circulation ?"],
        ['/juridique/', "Quels jeux de données doivent être publiés en open data ?"],
        ['/data.gouv.fr/', "Comment publier des jeux de données sur data.gouv.fr ?"],
      ]
    },
    {
      title: 'Algorithmes publics',
      collapsable: false,
      children: [
        ['/algorithmes/', "Les algorithmes publics : pourquoi et comment les expliquer ?"],
      ]
    },
    {
      title: 'Codes sources',
      collapsable: false,
      children: [
        ['/logiciels/', "Codes sources du secteur public : lesquels ouvrir, pourquoi et comment ?"],
      ]
    },
  ]

  return data
}

sidebar();

module.exports = {
  title: 'guides.etalab.gouv.fr',
  description: "Les guides d'Etalab : vous accompagner dans la réalisation de vos projets relatifs aux données, algorithmes et codes sources.",
  theme: 'vuepress-theme-gouv-fr',
  themeConfig: {
    sidebar: sidebar(),
    sidebarDepth: 1,
    logo: '/images/logo-marianne.svg',
    // lastUpdated: 'Dernière mise à jour',
    repo: 'etalab/guides',
    repoLabel: 'Code source',
    editLinks: true,
    editLinkText: 'Proposer des modifications sur cette page',
    nav: [
      { text: 'Sommaire', link: '/accueil.html' },
      { text: 'Contacter Etalab', link: 'https://etalab.gouv.fr/contact' }
    ]
  },
  locales: {'/': {lang: 'fr-FR'}},
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
  ],
  markdown: {
    toc: { includeLevel: [2, 3, 4, 5] }
  },
  plugins: [
    [
      'vuepress-plugin-matomo',
      {
        siteId: 99,
        trackerUrl: 'https://stats.data.gouv.fr/'
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'lexique',
        before: info => `<div class="lexique"><p class="title">Lexique : ${info}</p>`,
        after: '</div>',
      },
    ],
  ]
}

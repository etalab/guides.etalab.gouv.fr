const {getSidebar} = require('vuepress-theme-gouv-fr/sidebar.js')

module.exports = {
  title: 'guides.etalab.gouv.fr',
  description: "Les guides d'Etalab : vous accompagner dans la réalisation de vos projets relatifs aux données, algorithmes et codes sources.",
  theme: 'vuepress-theme-gouv-fr',
  themeConfig: {
    sidebar: getSidebar(),
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
    ],
    sidebarTitles: {
        '/qualite/': "Préparer des données à la circulation",
        '/juridique/': "Cadre juridique de l'open data",
        '/data.gouv.fr/': 'Publication sur data.gouv.fr',
        '/algorithmes/': 'Les algorithmes publics',
        '/logiciels/': 'Codes sources du secteur public',
    }
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

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
    repo: 'etalab/guides.etalab.gouv.fr',
    repoLabel: 'Code source',
    editLinks: true,
    editLinkText: 'Proposer des modifications sur cette page',
    nav: [
      { text: '📚 Sommaire', link: '/accueil.html' },
      { text: '💾 Télécharger les guides', link: '/pdf.html' },
      { text: '✉️ Contacter Etalab', link: 'https://www.etalab.gouv.fr/contact' }
    ],
    sidebarTitles: {
        '/qualite/': "Préparer les données à l'ouverture et la circulation",
        '/juridique/': "Identifier les données à ouvrir",
        '/data.gouv.fr/': 'Publier les données sur data.gouv.fr',
        '/reutilisation': 'Publier des réutilisations sur data.gouv.fr',
        '/algorithmes/': 'Expliquer les algorithmes publics',
        '/logiciels/': 'Ouvrir les codes sources',
        '/producteurs-schemas/': 'Créer des schémas de données',
        '/pseudonymisation/': "Pseudonymiser des documents grâce à l'IA",
    },
    pdfFiles: [
        {path: 'pdf/guide-qualite.pdf', name: "Préparer les données à l'ouverture et la circulation"},
        {path: 'pdf/guide-juridique.pdf', name: "Identifier les données à ouvrir"},
        {path: 'pdf/guide-data.gouv.fr.pdf', name: 'Publier les données sur data.gouv.fr'},
        {path: 'pdf/guide-algorithmes.pdf', name: 'Expliquer les algorithmes publics'},
        {path: 'pdf/guide-logiciels.pdf', name: 'Ouvrir les codes sources'},
        {path: 'pdf/guide-producteurs-schemas.pdf', name: 'Créer des schémas de données'},
        {path: 'pdf/guide-pseudonymisation.pdf', name: "Pseudonymiser des documents grâce à l'IA"},
    ],
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

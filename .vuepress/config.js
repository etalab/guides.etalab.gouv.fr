const {getSidebar} = require('./sidebar.js')

module.exports = {
  title: 'guides.etalab.gouv.fr',
  description: 'Les guides d\'Etalab',
  themeConfig: {
    sidebar: getSidebar(),
    sidebarDepth: 1,
    logo: '/images/logo-marianne.svg',
    // lastUpdated: 'Dernière mise à jour',
    repo: 'etalab/guides',
    editLinks: true,
    editLinkText: 'Proposer des modifications sur cette page'
  },
  locales: {'/': {lang: 'fr-FR'}},
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png' }],
  ],
  markdown: {
    toc: { includeLevel: [2, 3, 4, 5] }
  }
}

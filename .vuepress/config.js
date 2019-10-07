sidebar = {
  '/qualite/': [
    '',
    '0-introduction',
    '1-preparer-le-jeu-de-donnees',
    '2-documenter-les-donnees',
    '3-elements-organisationnels',
  ],
  // add other guides here, like this:
  // '/dummy/': [
  //   '',
  //   'dummy-child',
  //   'dummy-child-dir/dummy-child-dir-child'
  // ]
}

module.exports = {
  title: 'guides.etalab.gouv.fr',
  description: 'Les guides d\'Etalab',
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
    logo: 'https://doc.data.gouv.fr/assets/images/logo-marianne.svg',
    // lastUpdated: 'Dernière mise à jour',
  },
  locales: {'/': {lang: 'fr-FR'}},
  dest: 'public',
  markdown: {
    toc: { includeLevel: [2, 3, 4, 5] }
  }
}

sidebar = [
  {
    title: 'Guide qualité',
    path: '/qualite',
    collapsable: false,
    children: [
      'qualite/1-preparer-le-jeu-de-donnees',
      'qualite/2-documenter-les-donnees',
      'qualite/3-elements-organisationnels'
    ]
  },
]

module.exports = {
  title: 'guides.etalab.gouv.fr',
  description: 'Les guides d\'Etalab',
  themeConfig: {
    sidebar: sidebar,
    sidebarDepth: 1,
  },
  dest: 'public'
}

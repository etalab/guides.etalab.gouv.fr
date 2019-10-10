const dirTree = require('directory-tree')

function getGuides () {
    // look for non hidden or special dirs with md in them
  return dirTree(`${__dirname}/..`, {extensions:/\.md/, exclude: [/node_modules/, /\.git/]}).children.filter(child => {
    return child.type === 'directory' && !child.name.startsWith('.')
  }).map(child => {
    return child.name
  })
}

function getSidebar () {  
  // build the sidebar from "guides" directory structure
  const sidebar = {}
  const guides = getGuides()
  let children, guidePath
  // add each guide with its chapters
  guides.forEach(guide => {
    guidePath = `/${guide}/`
    sidebar[guidePath] = ['']
    children = dirTree(`${__dirname}/../${guide}`, {extensions:/\.md/})
    children.children.forEach(child => {
      if (child.type === 'file' && child.name !== 'README.md' && child.name !== 'index.md') {
        sidebar[guidePath].push(child.name)
      }
    })
  })
  // add a fallback with the guides list
  sidebar['/'] = [...guides.map(guide => `/${guide}/`)]
  return sidebar
}


module.exports = {getSidebar, getGuides}
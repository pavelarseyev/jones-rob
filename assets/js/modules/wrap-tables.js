export function wrapTables () {
  const contentTables = document.querySelectorAll('.content table')

  contentTables.forEach(table => {
    const parentNode = table.parentNode
    const tableWrapper = document.createElement('div')
    tableWrapper.classList.add('table-wrapper')
    parentNode.insertBefore(tableWrapper, table)
    tableWrapper.appendChild(table)
  })
}
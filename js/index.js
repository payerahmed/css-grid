console.clear()

document.querySelector('button').addEventListener('click', handleClick)

function handleClick () {
  console.log('clicked')
  document.querySelector('.gprent').classList.add('gparentNew')
  document.querySelector('.prents').classList.add('parentNew')
  
}

document
  .querySelector('#load')
  .addEventListener('click', () => window.location.reload())

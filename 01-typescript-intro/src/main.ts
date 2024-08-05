import './style.css'

// import './topics/01-basic-types';
// import './topics/03-functions'
// import './topics/04-homeworks-type'
// import './topics/05-basic-destructuring'
// import './topics/06-function-destructuring'
// import './topics/07-import-export'
// import './topics/08-classes'
// import './topics/09-generic'
// import './topics/10-decorator'
import './topics/11-optional-chaining'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  Hola mundo
`

console.log('Hola mundo')

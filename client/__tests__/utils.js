import parseClientFilamentQuery from '../../filament/parseClientFilamentQuery'

describe('parseClientFilamentQuery', () => {

  const queryOnlyId = `
  {
    todos { 
      id
      text
      completed
    }
  }
`;

  const queryWantToMake = `
    query {
      todos {
        id
        text
        difficulty
      }
    }
  `;

  beforeAll(() => {
    sessionStorage.setItem('todos', JSON.stringify([
      {
        id: 123214251,
        text: 'THIS IS MY TODO!!!',
        completed: true,
        number: 0,
        isChecked: false,
        friendTodos: [{
          id: '1323423'
        }]
      },
      {
        id: 5,
        text: '555555555555555555',
        isChecked: false,
        completed: true,
        number: 0,
        friendTodos: [{
          id: '1323423'
        }]
      }]))

  })
  it('should pass test', () => {
    const [newQuery, cacheData] = parseClientFilamentQuery(queryWantToMake)
    return expect(cacheData.todos[0].id).toEqual(123214251)

  })

  it('should not be in the cache', () => {
    const [newQuery, cacheData] = parseClientFilamentQuery(queryWantToMake)
    return expect(cacheData.todos[0].difficulty).not.toEqual('not in the cache')
  })
})
import { createFriend, getFullName } from '../friend'

test('create friend object', () => {
  const attrs = { 
    _id: 1,
    email: "test@example.com", 
    location: {}, 
    name:{ first:'John', last: 'Lee' }, 
    picture:'blahblah' 
  }
  const friend = createFriend(attrs)
  
  expect(friend).toStrictEqual({ 
    id: 1, 
    email: "test@example.com", 
    location: null, 
    name: { first: 'John', last: "Lee" }, 
    picture: 'blahblah'
  })
})

test('create friend object 2', () => {
  const attrs = { 
    _id: 1, 
    email: "test@example.com", 
    location: { latitude: 123.123, longitude: 23.23 }, 
    name:{ first:'John', last: 'Lee' }, 
    picture:'blahblah' 
  }
  const friend = createFriend(attrs)
  
  expect(friend).toStrictEqual({ 
    id: 1, 
    email: "test@example.com", 
    location: { latitude: 123.123, longitude: 23.23 }, 
    name: { first: 'John', last: "Lee" }, 
    picture: 'blahblah'
  })
})

test('getFullName', () => {
  const friend = createFriend({ name: { first: 'John', last: 'Lee' } })

  expect(getFullName(friend)).toBe('John Lee')
})

export function createFriend (attrs) {
  return {
    id: attrs._id,
    email: attrs.email,
    location: !isNaN(attrs.location?.latitude) && !isNaN(attrs.location?.longitude)
      ? {
          latitude: attrs.location.latitude,
          longitude: attrs.location.longitude
        }
      : null,
    name: {
      first: attrs.name?.first || '',
      last: attrs.name?.last || ''
    },
    picture: attrs.picture
  }
}

export function getFullName (friend) {
  return `${friend.name.first} ${friend.name.last}`
}

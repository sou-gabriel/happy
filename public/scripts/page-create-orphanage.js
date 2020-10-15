const map = L.map("mapid").setView([-27.222633, -49.6455874], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", ).addTo(map)

const icon = L.icon({ 
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68]
})

let marker = null

map.on('click', event => {
  const latitude = event.latlng.lat
  const longitude = event.latlng.lng

  document.querySelector('[name=lat]').value = latitude
  document.querySelector('[name=lng]').value = longitude

  if (marker) {
    map.removeLayer(marker)    
  }

  marker = L.marker([latitude, longitude], { icon }).addTo(map)
})

const addPhotoField = () => {
  const container = document.querySelector('#images')
  const fieldsContainer = document.querySelectorAll('.new-upload')
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  const input = newFieldContainer.children[0]

  if (input.value === '') {
    return
  }

  input.value = ''
  container.appendChild(newFieldContainer)
}

const deleteField = event => {
  const span = event.currentTarget
  const fieldsContainer = document.querySelectorAll('.new-upload')

  if (fieldsContainer.length < 2) {
    span.parentNode.children[0].value = '' 
    return
  }

  span.parentNode.remove()
}

const toggleSelect = event => {
  document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

  const button = event.target 
  button.classList.add('active')

  const input = document.querySelector('[name="open_on_weekends"]')

  console.log(button.dataset.value)
}
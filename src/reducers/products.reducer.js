var initialState = [
  {
    id: 1,
    name: 'iphone 6 plus',
    image: 'https://media1-reatimes.cdn.vccloud.vn/upload/publish/Reno%202.jpg',
    description: 'Sản phẩm do iphone sản xuất',
    price: 600,
    inventory: 10,
    rating: 5
  },
  {
    id: 2,
    name: 'iphone 7 plus',
    image: 'https://media1-reatimes.cdn.vccloud.vn/upload/publish/Reno%202.jpg',
    description: 'Sản phẩm do iphone sản xuất',
    price: 700,
    inventory: 15,
    rating: 4
  },
  {
    id: 3,
    name: 'iphone 8 plus',
    image: 'https://media1-reatimes.cdn.vccloud.vn/upload/publish/Reno%202.jpg',
    description: 'Sản phẩm do iphone sản xuất',
    price: 800,
    inventory: 17,
    rating: 4
  },
]

const products = (state = initialState, action) => {
  switch(action.type){
    default: return [...state]
  }
}

export default products
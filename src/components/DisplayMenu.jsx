const menuItems = [
  {
    id: 1001,
    name: 'Appetizers',
    image: 'image',
    dishes:[
      {
        name: 'Dish no.1',
        price: 200
      },
      {
        name: 'Dish no.2',
        price: 300
      },
      {
        name: 'Dish no.3',
        price: 400
      },
      {
        name: 'Dish no.4',
        price: 350
      },{
        name: 'Dish no.5',
        price: 450
      }
    ]
  },
  {
    id: 1002,
    name: 'Mains',
    image: 'image',
    dishes: [
      {
        name: 'Dish no.1',
        price: 200
      },
      {
        name: 'Dish no.2',
        price: 300
      },
      {
        name: 'Dish no.3',
        price: 400
      },
      {
        name: 'Dish no.4',
        price: 350
      },{
        name: 'Dish no.5',
        price: 450
      }
    ]
  },
  {
    id: 1003,
    name: 'Beverages',
    image: 'image',
    dishes: [
      {
        name: 'Dish no.1',
        price: 200
      },
      {
        name: 'Dish no.2',
        price: 300
      },
      {
        name: 'Dish no.3',
        price: 400
      },
      {
        name: 'Dish no.4',
        price: 350
      },{
        name: 'Dish no.5',
        price: 450
      }
    ]
  },
  {
    id: 1002,
    name: 'Liquors',
    image: 'image',
    dishes: [
      {
        name: 'Dish no.1',
        price: 200
      },
      {
        name: 'Dish no.2',
        price: 300
      },
      {
        name: 'Dish no.3',
        price: 400
      },
      {
        name: 'Dish no.4',
        price: 350
      },{
        name: 'Dish no.5',
        price: 450
      }
    ]
  }
]
function DisplayMenu(id) {
  return (
    <div className="menu-container">
      {menuItems.map((menuItem) => (
        <div key={menuItem.id} className="menu-item">
          <img src="./src/assets/react.svg" alt="Menu Image" />
          <span>{menuItem.name}</span>
        </div>
      ))}
    </div>
  );
}

export default DisplayMenu
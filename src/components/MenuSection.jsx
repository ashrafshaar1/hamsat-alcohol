import MenuItem from './MenuItem';

const MenuSection = () => {
  const menuData = {
    cocktails: [
      {
        title: "Classic Mojito",
        description: "White rum, fresh mint, lime juice, sugar and soda water",
        price: "$12",
        image: "/upload/Mojito-Square-750x750.jpg",
        alt: "Mojito"
      },
      {
        title: "Old Fashioned",
        description: "Bourbon, sugar, bitters and orange peel",
        price: "$14",
        image: "/upload/cocktail2.jpg",
        alt: "Old Fashioned"
      },
      {
        title: "Margarita",
        description: "Tequila, triple sec, lime juice and salt rim",
        price: "$13",
        image: "/upload/cocktail3.jpg",
        alt: "Margarita"
      }
    ],
    beers: [
      {
        title: "Local IPA",
        description: "Hoppy craft beer with citrus notes",
        price: "$7",
        image: "/upload/beer1.jpg",
        alt: "IPA"
      },
      {
        title: "Chocolate Stout",
        description: "Dark roasted beer with chocolate undertones",
        price: "$8",
        image: "/upload/beer2.jpg",
        alt: "Stout"
      }
    ],
    wines: [
      {
        title: "House Red",
        description: "Full-bodied Cabernet Sauvignon",
        price: "$9/glass, $32/bottle",
        image: "/upload/wine1.jpg",
        alt: "Red Wine"
      },
      {
        title: "Chardonnay",
        description: "Oak-aged white wine with buttery notes",
        price: "$8/glass, $28/bottle",
        image: "/upload/wine2.jpg",
        alt: "White Wine"
      }
    ]
  };

  return (
    <div className="menu-section">
      <h2 className="cocktails-title">Cocktails</h2>
      {menuData.cocktails.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
      
      <h2 className="beers-title">Beers</h2>
      {menuData.beers.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
      
      <h2 className="wines-title">Wines</h2>
      {menuData.wines.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuSection;
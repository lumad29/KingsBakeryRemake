// Utilities 
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    products: [
      {
        id: 0,
        name: 'Our Freshly Made Breads',
        items: [
          { id: 0, name: 'Sourdough', price: 2, inStock: true, img: '/assets/sourdough-bread.jpg', description: ' A type of bread known for its tangy flavor and chewy texture, fermented with a natural mixture of flour and water called sourdough starter', hello: 'hello sourdough',/*ingredients: ['harina', 'agua']*/ },
          { id: 1, name: 'Baguette', price: 2, inStock: true, img: '/assets/products/baguette-bread.jpg', description: 'An iconic French bread, well-known for its slender shape and crisp crust, with a light and airy interior.', hello: 'hello baguette',/* ingredients: ['harina', 'agua']*/ },
          { id: 2, name: 'Brioche', price: 3, inStock: true, img: '/assets/products/brioche-bread.jpg', description: 'A beloved French bread with buttery richness and soft texture. It is a favorite for both sweet and savory dishes', hello: 'hello Brioche',/* ingredients: ['huevo', 'sal']*/ },
          { id: 3, name: 'Focaccia', price: 3, inStock: true, img: '/assets/products/focaccia-bread.jpg', description: 'An Italian favorite with fluffy texture and savory crust seasoned with herbs. Perfect with cheese, gourmet sandwiches, and more', hello: 'hello focaccia', /*ingredients: ['huevo', 'sal']*/ },
          { id: 4, name: 'Multigrain', price: 3, inStock: true, img: '/assets/products/multigrain-bread.jpg', description: 'A bread that combines grains and seeds. Its robust texture and rich flavor makes it a perfetct choice for any meal', hello: 'hello multigrain', /*ingredients: ['huevo', 'sal']*/ },
          { id: 5, name: 'Ciabatta', price: 3, inStock: true, img: '/assets/products/ciabatta-bread.jpg', description: 'Originating from Italy, its rustic crust and airy texture makes it ideal for artisanal sandwiches and hearty soups"', hello: 'hello ciabatta', /*ingredients: ['huevo', 'sal']*/ },
          { id: 6, name: 'Pita', price: 3, inStock: true, img: '/assets/products/pita-bread.jpg', description: 'An Eastern Mediterranean favorite, cherished for its soft and fluffy texture, perfect for filling with falafel, salads, or dips', hello: 'hello pita', /*ingredients: ['huevo', 'sal']*/ },
          { id: 7, name: 'Pretzel', price: 3, inStock: true, img: '/assets/products/pretzel-bread.jpg', description: 'A beloved snack, is known for its twisted shape and chewy texture, offering a delightful combination of savory and slight sweetness', hello: 'hello Pretzel', /*ingredients: ['huevo', 'sal']*/ },
          { id: 8, name: 'Hamburger', price: 3, inStock: true, img: '/assets/products/hamburger-bread.jpg', description: 'With a soft texture and sturdy build, it perfectly complements the savory flavors of a delicious burger', hello: 'hello hamburger', /*ingredients: ['huevo', 'sal']*/ },
          { id: 9, name: 'White Bread', price: 3, inStock: true, img: '/assets/products/white-bread.jpg', description: 'Known for its soft, fluffy texture and mild taste, serves as a versatile staple for sandwiches and morning toasts', hello: 'hello white bread', /*ingredients: ['huevo', 'sal']*/ }

        ],
        pageImg: '/assets/flour.jpeg',
        src: '/assets/bread-group.jpg',
        text: `Our bread is baked fresh every morning with the best ingredients. From classic sourdough to unique artisan loaves, each slice is perfect for sandwiches, meals, or just with butter. Enjoy the homemade goodness in every bite.`,
      },
      {
        id: 1,
        name: 'Pastries',
        items: [
          { id: 1, name: 'vanilla cupcake', price: 1, inStock: false, img: '/assets/products/vanilla-cupcake.jpg', description: 'this is a vanilla cupcake' },
          {
            id: 0, name: 'chocolate cupcake', price: 2, inStock: true, img: '/assets/products/chocolate-cupcake.jpg'
            , description: 'this is a chocolate cupcake'
          }
        ],
        src: '/assets/croissant.jpg',
        text: 'Step into our bakery wonderland, where each pastry brings a little piece of joy. Whether you adore flaky croissants, filled danishes, or warm cinnamon rolls, our menu offers something to satisfy every craving'
      },
      {
        id: 2,
        name: 'Cookies',
        src: '/assets/cookies.jpg',
        text: `Welcome to our cozy corner of homemade delights! Our cookies, crafted with love and baked to perfection, offer crunchy edges, gooey centers, and delightful flavors. Whether you love chocolate chip or oatmeal raisin, there's a treat here for you.`
      },
      {
        id: 3,
        name: 'Cakes and Pies',
        src: '/assets/cake.jpg',
        text: 'Discover our irresistible cakes and pies, each crafted with a blend of expertise and flavor. From rich, velvety cakes to flaky, fruit-packed pies, every slice is a delightful treat for any moment worth celebrating.'
      },
      {
        id: 4,
        name: 'Gluten-Free & Vegan',
        src: '/assets/gluten-free.jpg',
        text: 'Explore our delicious gluten-free and vegan delights, where flavor meets inclusivity. Dive into a menu that celebrates both health-conscious choices and vibrant flavors, ensuring every bite is a delightful experience for all.'
      },
      {
        id: 5,
        name: 'Drinks',
        src: '/assets/drinks.jpg',
        text: 'Discover the perfect cup of coffee at our bakery, where we brew each blend to perfection. Our coffee selection is designed to complement our delicious baked goods. We also feature a variety of other refreshing drinks to enjoy. '
      }
    ]
  }),
})


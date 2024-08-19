// Utilities 
import { defineStore } from 'pinia'
export const useAppStore = defineStore('app', {
  state: () => ({
    products: [
      {
        id: 0,
        name: 'Breads',
        items: [
          { id: 0, name: 'Sourdough', price: 2, inStock: true, img: '/assets/sourdough-bread.jpg', description: ' A type of bread known for its tangy flavor and chewy texture, fermented with a natural mixture of flour and water called sourdough starter.', hello: 'hello sourdough',/*ingredients: ['harina', 'agua']*/ },
          { id: 1, name: 'Baguette', price: 2, inStock: true, img: '/assets/products/baguette-bread.jpg', description: 'An iconic French bread, well-known for its slender shape and crisp crust, with a light and airy interior.', hello: 'hello baguette',/* ingredients: ['harina', 'agua']*/ },
          { id: 2, name: 'Brioche', price: 3, inStock: true, img: '/assets/products/brioche-bread.jpg', description: 'A beloved French bread with buttery richness and soft texture. It is a favorite for both sweet and savory dishes.', hello: 'hello Brioche',/* ingredients: ['huevo', 'sal']*/ },
          { id: 3, name: 'Focaccia', price: 3, inStock: true, img: '/assets/products/focaccia-bread.jpg', description: 'An Italian favorite with fluffy texture and savory crust seasoned with herbs. Perfect with cheese, gourmet sandwiches, and more.', hello: 'hello focaccia', /*ingredients: ['huevo', 'sal']*/ },
          { id: 4, name: 'Multigrain', price: 3, inStock: true, img: '/assets/products/multigrain-bread.jpg', description: 'A bread that combines grains and seeds. Its robust texture and rich flavor makes it a perfetct choice for any meal.', hello: 'hello multigrain', /*ingredients: ['huevo', 'sal']*/ },
          { id: 5, name: 'Ciabatta', price: 3, inStock: true, img: '/assets/products/ciabatta-bread.jpg', description: 'Originating from Italy, its rustic crust and airy texture makes it ideal for artisanal sandwiches and hearty soups."', hello: 'hello ciabatta', /*ingredients: ['huevo', 'sal']*/ },
          { id: 6, name: 'Pita', price: 3, inStock: true, img: '/assets/products/pita-bread.jpg', description: 'A Mediterranean favorite, cherished for its soft and fluffy texture, perfect for filling with falafel, salads, or dips.', hello: 'hello pita', /*ingredients: ['huevo', 'sal']*/ },
          { id: 7, name: 'Pretzel', price: 3, inStock: true, img: '/assets/products/pretzel-bread.jpg', description: 'A beloved snack, is known for its twisted shape and chewy texture, offering a delightful combination of savory and slight sweetness.', hello: 'hello Pretzel', /*ingredients: ['huevo', 'sal']*/ },
          { id: 8, name: 'Hamburger', price: 3, inStock: true, img: '/assets/products/hamburger-bread.jpg', description: 'With a soft texture and sturdy build, it perfectly complements the savory flavors of a delicious burger.', hello: 'hello hamburger', /*ingredients: ['huevo', 'sal']*/ },
          { id: 9, name: 'English Muffin', price: 3, inStock: true, img: '/assets/products/english-muffin.jpeg', description: 'Known for its round, flat shape and unique, spongy texture, the English muffin is t a popular choice for breakfast or brunch.', hello: 'hello white bread', /*ingredients: ['huevo', 'sal']*/ }
        ],
        pageImg: '/assets/flour.jpeg',
        src: '/assets/bread-group.jpg',
        text: `Our bread is baked fresh every morning with the best ingredients. From classic sourdough to unique artisan loaves, each slice is perfect for sandwiches, meals, or just with butter. Enjoy the homemade goodness in every single bite.`,
      },
      {
        id: 1,
        name: 'Pastries',
        items: [
          { id: 0, name: 'Cinnamon Rolls', price: 1, inStock: false, img: '/assets/products/cinnamon-rolls.jpeg', description: 'Enjoy our warm, fluffy cinnamon rolls with a sweet cinnamon swirl and a perfect glaze. Ideal for a cozy treat any time of day.' },
          {
            id: 1, name: 'Croissants', price: 2, inStock: true, img: '/assets/products/croissants.webp'
            , description: 'One of our specialties! Delight in our croissants with their flaky, golden crust and soft, buttery interior.'
          },
          { id: 2, name: 'Pain Au Chocolat', price: 1, inStock: false, img: '/assets/products/PainAuChocolat.jpg', description: 'Enjoy our Pain au Chocolat, a French classic with flaky layers and rich melted chocolate, capturing the essence of French pastry perfection.' },
          { id: 3, name: 'Danishes', price: 1, inStock: true, img: '/assets/products/danishes.webp', description: 'Try our Danishes, a delightful treat with buttery, flaky pastry and a variety of delicious fillings, embodying the perfect blend of sweetness and texture.' },
          { id: 4, name: 'Blueberry Muffin', price: 1, inStock: true, img: '/assets/products/blueberry-muffin.jpg', description: 'Try our blueberry muffins, bursting with juicy berries and a tender crumb. Each bite offers a perfect balance of sweetness and tartness.' },
          { id: 5, name: 'Vanilla Muffin', price: 1, inStock: true, img: '/assets/products/vanilla-muffin.jpg', description: 'Who doesn’t enjoy a classic vanilla muffin? with fluffy texture and a rich, buttery flavor. yum!' },
          { id: 6, name: 'Profiteroles', price: 1, inStock: true, img: '/assets/products/profiterol.jpg', description: 'Profiteroles are delicate pastry puffs made from choux dough, filled with cream, and topped with rich chocolate sauce.' },
          { id: 7, name: 'Doughnuts', price: 1, inStock: true, img: '/assets/products/doughnut.jpg', description: 'One of the most popular sweet treats made from fried dough, often coated with glaze, and sometimes filled with cream or jelly.' },
          { id: 7, name: 'Brownies', price: 1, inStock: true, img: '/assets/products/brownies.jpg', description: 'Rich, fudgy squares of chocolatey goodness that melt in your mouth. Perfect on their own or paired with ice cream.' },
        ],
        pageImg: '/assets/pastries.jpg',
        src: '/assets/croissant.jpg',
        text: 'Step into our bakery wonderland, where each pastry brings a little piece of joy. Whether you adore flaky croissants, filled danishes, or warm cinnamon rolls, our menu offers something to satisfy every craving.'
      },
      {
        id: 2,
        name: 'Cookies',
        items: [
          { id: 0, name: 'Chocolate Chip', price: 1, inStock: false, img: '/assets/products/chocolate-chip-cookie.jpg', description: 'Enjoy our warm, fluffy cinnamon rolls with a sweet cinnamon swirl and a perfect glaze. Ideal for a cozy treat any time of day.' },
          {
            id: 1, name: 'Chocolate', price: 2, inStock: true, img: '/assets/products/chocolate-cookie.jpg'
            , description: 'One of our specialties! Delight in our croissants with their flaky, golden crust and soft, buttery interior.'
          },
          { id: 2, name: 'Pistachio', price: 1, inStock: false, img: '/assets/products/pistachio-cookie.jpg', description: 'Enjoy our Pain au Chocolat, a French classic with flaky layers and rich melted chocolate, capturing the essence of French pastry perfection.' },
          { id: 3, name: 'Cranberry', price: 1, inStock: true, img: '/assets/products/cranberry-cookie.jpg', description: 'Delight in our cranberry cookies, a perfect mix of sweet and tangy with a chewy texture. Every bite captures a burst of cranberry flavor.' },
          { id: 4, name: 'Honey', price: 1, inStock: true, img: '/assets/products/honey-cookie.webp', description: 'Just like Grandma’s cookies—perfect with tea or for a sweet treat anytime.' },
          { id: 5, name: 'Coconut', price: 1, inStock: true, img: '/assets/products/coconut-cookie.jpeg', description: 'Yummy coconut cookies. They’re so delicious, you might just find yourself dreaming of palm trees and sandy beaches!' },
        ],
        pageImg: '/assets/cookies-bg.jpg',
        src: '/assets/cookies.jpg',
        text: `Welcome to our cozy corner of homemade delights! Our cookies, crafted with love and baked to perfection, offer crunchy edges, gooey centers, and delightful flavors. Whether you love chocolate chip or oatmeal raisin, there's a treat here for you.`
      },
      {
        id: 3,
        name: 'Cakes and Pies',
        items: [
          { id: 0, name: 'Red Velvet', price: 1, inStock: false, img: '/assets/products/red-velvet-cake.jpeg', description: 'A soft, deep red sponge cake filled with layers of white chocolate cream cheese and topped with buttercream.' },
          {
            id: 1, name: 'Victoria Sponge', price: 2, inStock: true, img: '/assets/products/victoria-sponge-cake.jpeg'
            , description: 'A classic British cake made of two light and airy sponge layers, filled with jam and cream, and dusted with powdered sugar.'
          },
          { id: 2, name: 'Marquise', price: 1, inStock: false, img: '/assets/products/marquise-cake.jpg', description: 'A flourless chocolate brownie filled with a layer of caramel, topped with dark chocolate mousse, and finished with crispy Italian meringue flakes.' },
          { id: 3, name: 'Carrot Cake', price: 1, inStock: true, img: '/assets/products/carrot-cake.jpg', description: 'A moist, spiced cake with a surprising sweetness from grated carrots, topped with cream cheese frosting and a hint of crunch from toasted nuts' },
          { id: 4, name: 'Strawberry Cheesecake', price: 1, inStock: true, img: '/assets/products/cheesecake.jpg', description: 'A creamy dessert made with cream cheese and sugar, set on a buttery crust, and topped with fresh strawberries or strawberry sauce.' },
          { id: 5, name: 'Lemmon Pie', price: 1, inStock: true, img: '/assets/products/lemmon-pie.jpg', description: 'A tangy, creamy dessert with a smooth lemon filling set in a buttery pie crust, topped with meringue for a refreshing, sweet-tart treat.'},
        ],
         pageImg: '/assets/cake-bg.jpeg',
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


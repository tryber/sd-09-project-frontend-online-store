// import React from 'react';
// import ProductCard from './ProductCard';
// import * as api from './api';

// class ProductsByCategory extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { products: [] };
//     this.getProductsByCategory = this.getProductsByCategory.bind(this);
//   }

//   async getProductsByCategory(category) {
//     const products = await api.getProductsFromCategoryAndQuery(category, '');
//     return products.results;
//   }

//   render() {
//     const { category } = this.props;
//     const teste = this.getProductsByCategory(category);
//     console.log((teste));
//     return (
//       <div>
//         {/* { this.getProductsByCategory(category).map((item) => (
//           <ProductCard key={ item.id } product={ item } />
//         ))} */}

//       </div>
//     );
//   }
// }

// export default ProductsByCategory;

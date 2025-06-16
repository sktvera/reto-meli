import React from 'react';
import { useEffect, useState } from 'react';
//COMPONENTES________
import Header from '../../Components/public/Header/Header';
import Footer from '../../Components/public/Footer/Footer';
import ProductTable from '../../Components/private/ProductTable/ProductTable';
//SERVICES________
import { getProducts } from '../../services/productService';
import { getFeaturedProducts } from '../../services/featuredProductsService';

import{categoryMap} from '../../services/searchKeywordsService/dictionary/categoryMap'

export default function Home() {

  const [query, setQuery] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'common' | 'featured'

  useEffect(() => {
    const loadData = () => {
      const common = getProducts();
      const featured = getFeaturedProducts();

      if (filterType === 'common') {
        setAllProducts(common);
      } else if (filterType === 'featured') {
        setAllProducts(featured);
      } else {
        // combinación por defecto
        const merged = [...common, ...featured];
        setAllProducts(merged);
      }
    };

    loadData();
  }, [filterType]);



const filteredProducts = allProducts.filter((product) => {
  const categoryId = product?.category_id || '';
  const name = product?.name || product?.title || '';

  // Si el query es exactamente un ID de categoría, filtra por categoría
  const isCategorySearch = Object.values(categoryMap).includes(query);

  if (isCategorySearch) {
    return categoryId === query;
  }

  return name.toLowerCase().includes(query.toLowerCase());
});

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh',backgroundColor:'#f5f5f5' }}>
     <Header query={query} setQuery={setQuery} />
      <main style={{ flex: 1, padding: '20px' }}>
        <ProductTable setFilterType={setFilterType} filterType={filterType} data={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
}
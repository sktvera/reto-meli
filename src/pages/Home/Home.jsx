import { useEffect, useState } from 'react';
import Header from '../../Components/public/Header';
import Footer from '../../Components/public/Footer/Footer';
import ProductTable from '../../Components/private/ProductTable';

import { getProducts } from '../../services/productService';
import { getFeaturedProducts } from '../../services/featuredProductsService';

export default function Home() {
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

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <main style={{ flex: 1, padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <label>Filtrar productos: </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          >
            <option value="all">Todos</option>
            <option value="common">Solo comunes</option>
            <option value="featured">Solo destacados</option>
          </select>
        </div>

        <ProductTable data={allProducts} />
      </main>

      <Footer />
    </div>
  );
}
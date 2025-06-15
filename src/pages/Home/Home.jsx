import { useEffect, useState } from 'react';
//COMPONENTES________
import Header from '../../Components/public/Header';
import Footer from '../../Components/public/Footer/Footer';
import ProductTable from '../../Components/private/ProductTable';
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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Header query={query} setQuery={setQuery} />

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

        <ProductTable data={filteredProducts} />
      </main>

      <Footer />
    </div>
  );
}




/*   category_id


MLA1055 celular
MLA109085 buzo
zapatillas MLA3724
paleta de tenis pinpong MLA12220
tijeras de camping MLA105432
zapatillas adidas MLA109027
aro flex pilates MLA416562
mochila MLA120350
antiparra gafas  MLA417271
venda de boxeo MLA413713
ojostas sandalias MLA416005 */
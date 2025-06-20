import React from 'react';
import { useEffect, useState, useMemo } from 'react';
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
  const [allProducts, setAllProducts] = useState([]);// guarda los datos de los servicios
  const [filterType, setFilterType] = useState('all'); // 'all' | 'common' | 'featured'[Filtro dinamico carga de datos]

  useEffect(() => {
    const loadData = () => {
      //llamado de los servicios______
      const common = getProducts();
      const featured = getFeaturedProducts();

      //Condicion de ordemiento por servicio____
      if (filterType === 'common') {
        setAllProducts(common);
      } else if (filterType === 'featured') {
        setAllProducts(featured);
      } else {
        //Combina los datos de ambos servicios____
        const merged = [...common, ...featured];
        setAllProducts(merged);
      }
    };

    loadData();
  }, [filterType]);



//Buscador dinamico// selecciona una categoria y lo compara contra el diccionario para retornar los productos disponibles que coinciden
const filteredProducts = useMemo(() => {
  return allProducts.filter((product) => {
    const categoryId = product?.category_id || '';
    const name = product?.name || product?.title || '';
    const categoryIdFromQuery = categoryMap[query];

    if (categoryIdFromQuery) {
      return categoryId === categoryIdFromQuery;
    }

    return name.toLowerCase().includes(query.toLowerCase());
  });
}, [allProducts, query]);

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
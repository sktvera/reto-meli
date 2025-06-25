/**
 * @author Julian David Vera Godoy
 * @description Product table component for displaying products with pagination and filtering
* @date 2025-06-24
 */

import React from 'react';
//HOOKS_________
import { useEffect, useState } from 'react';
//COMPONENTES________
import Pagination from '../Pagination/Pagination'
import ProductFilter from '../ProductFilter/ProductFilter';
//ASSETS________
import {Container,Card,Image,Info,Title,Price,Condition,Seller, Location, Link, Brand, Installments, FreeShipping} from './styles/ProductTableStyles';


export default function ProductTable({ data = [],setFilterType,filterType }) {
  
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setProducts(data);
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const paginated = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
<Container>
{/*Componente de ordenamiento________ProductFilter*/}
  <ProductFilter filterType={filterType} setFilterType={setFilterType} />
  {paginated.map(product => (
   <Card key={product.id}>
  <Image src={product.thumbnail} alt={product.title} />
  <Info>
    <Brand>{product.attributes?.find(attr => attr.id === 'BRAND')?.value_name || 'Marca desconocida'}</Brand>

    <Title>
      <Link href={product.permalink} target="_blank" rel="noopener noreferrer">
        {product.title}
      </Link>
    </Title>

    <Price>${product.price.toLocaleString()}</Price>
    {product.installments && (
      <Installments>
        en {product.installments.quantity} cuotas de ${product.installments.amount.toLocaleString()} con {product.installments.rate === 0 ? '0% interés' : `${product.installments.rate}% interés`}
      </Installments>
    )}
    {product.shipping?.free_shipping && <FreeShipping>Envío gratis</FreeShipping>}
    
    <Condition>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</Condition>
    <Seller>{product.seller?.nickname || 'Desconocido'}</Seller>
    <Location>{product.address?.city_name || '-'}, {product.address?.state_name || '-'}</Location>
  </Info>
</Card>
  ))}
  {/*Componente de paginacion________Pagination*/}
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={(page) => setCurrentPage(page)}
  />
</Container>
  );
}


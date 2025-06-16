import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination'
import ProductFilter from '../ProductFilter/ProductFilter';
import {Container,Card,Image,Info,Title,Price,Condition,Seller, Location, Link} from './styles/ProductTableStyles';


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
        <h4>{product.attributes[0].value_name}</h4>
        <Title>
          <Link href={product.permalink} target="_blank" rel="noopener noreferrer">
            {product.title}
          </Link>
        </Title>
        <Price>${product.price.toLocaleString()}</Price>
        <Condition>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</Condition>
        <Seller>{product.seller?.nickname || 'Desconocido'}</Seller>
        <Location>
          {product.address?.city_name || '-'}, {product.address?.state_name || '-'}
        </Location>
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


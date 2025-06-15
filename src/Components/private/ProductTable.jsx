import { useEffect, useState } from 'react';

export default function ProductTable({ data = [] }) {
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
    <div style={styles.container}>
      <h2>Listado de Productos</h2>



      {products.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Precio</th>
                <th>Condición</th>
                <th>Vendedor</th>
                <th>Ubicación</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map(product => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      style={{ width: 60 }}
                    />
                  </td>
                  <td>
                    <a href={product.permalink} target="_blank" rel="noopener noreferrer">
                      {product.title}
                    </a>
                  </td>
                  <td>${product.price.toLocaleString()}</td>
                  <td>{product.condition === 'new' ? 'Nuevo' : 'Usado'}</td>
                  <td>{product.seller?.nickname || 'Desconocido'}</td>
                  <td>{product.address?.city_name || '-'}, {product.address?.state_name || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div style={{ marginTop: '20px' }}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                disabled={currentPage === i + 1}
                style={{ margin: '0 5px' }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  searchInput: {
    padding: '8px',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  searchButton: {
    padding: '8px 12px',
    marginLeft: '10px',
    backgroundColor: '#3483fa',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};
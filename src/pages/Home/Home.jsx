import Header from '../../Components/public/Header';
import Footer from '../../Components/public/Footer/Footer';

export default function Home({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  const { login } = useContext(AppContext);
  return (
    <div className="flex flex-col min-h-screen bg-[#000]">
      <Navbar handleLogin={login} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar" style={{ width: '100%' }}>
      <div 
        className="container" 
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}
      >
        <Link href="/" className="logo" style={{ textDecoration: 'none' }}>ZF.</Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/#services">About</Link>
          <Link href="/#contact" className="btn-contact">Let's Talk</Link>
        </div>
      </div>
    </nav>
  );
}
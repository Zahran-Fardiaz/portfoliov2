import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <main className="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', width: '100%' }}>
          <p className="greeting">Hi there, I'm</p>
          <h1>Zahran Fardiaz</h1>
          <p className="academic-status" style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 500, marginBottom: '10px', letterSpacing: '0.5px' }}>
            Electrical Engineering Student at Universitas Padjadjaran
          </p>
          <p className="subtitle" style={{ marginTop: 0, marginBottom: '25px' }}>
            Machine Learning | Data Analytics | Systems Engineering.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/zahran-fardiaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Zahran-Fardiaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </main>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="projects-section" style={{ width: '100%', padding: '120px 0', background: 'transparent', position: 'relative', clear: 'both' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <div className="section-header fade-in" style={{ marginBottom: '60px', textAlign: 'left' }}>
            <p className="section-subtitle" style={{ color: '#00d2ff', fontFamily: 'monospace', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '8px' }}>Selected Archives</p>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 700, letterSpacing: '-1px', marginTop: 0 }}>Featured Works</h2>
          </div>

          <div className="projects-text-list">
            
            <div className="project-text-item fade-in" style={{ borderBottom: '1px solid #1a1a1a', padding: '45px 0', transition: 'all 0.3s ease' }}>
              <Link href="/projects/risk-profiler" style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'start' }}>
                <div className="project-meta-left">
                  <span className="project-num" style={{ fontFamily: 'monospace', color: '#444', fontSize: '0.85rem', display: 'block', marginBottom: '15px', letterSpacing: '1px' }}>01 / MACHINE LEARNING</span>
                  <div className="tags">
                    <span>FastAPI</span>
                    <span>SHAP</span>
                  </div>
                </div>
                <div className="project-content-right">
                  <h3 className="project-title-text" style={{ fontSize: '1.7rem', fontWeight: 600, color: '#ffffff', marginBottom: '12px', transition: 'color 0.3s ease', lineHeight: 1.3 }}>
                    Automated Credit Risk Assessment & Explainable AI <span className="arrow" style={{ display: 'inline-block', transition: 'transform 0.3s ease', marginLeft: '5px' }}>&rarr;</span>
                  </h3>
                  <p style={{ color: '#888888', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '700px', marginTop: 0 }}>
                    An end-to-end Machine Learning pipeline designed to automate credit risk profiling for MSMEs. Built using a data leakage-free RandomForestClassifier, integrated with the SHAP framework for natural language risk explanations, and deployed as a REST API microservice.
                  </p>
                </div>
              </Link>
            </div>

            <div className="project-text-item fade-in delay-1" style={{ borderBottom: '1px solid #1a1a1a', padding: '45px 0', opacity: 0.35, cursor: 'default' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '40px', alignItems: 'start' }}>
                <div className="project-meta-left">
                  <span className="project-num" style={{ fontFamily: 'monospace', color: '#444', fontSize: '0.85rem', display: 'block', marginBottom: '15px', letterSpacing: '1px' }}>02 / DATA ANALYTICS</span>
                  <div className="tags">
                    <span style={{ borderColor: '#222', color: '#444' }}>IN PROGRESS</span>
                  </div>
                </div>
                <div className="project-content-right">
                  <h3 style={{ fontSize: '1.7rem', fontWeight: 600, color: '#aaaaaa', marginBottom: '12px', lineHeight: 1.3, marginTop: 0 }}>
                    Business Insights & Quantitative Analytics
                  </h3>
                  <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '700px', marginTop: 0 }}>
                    Currently engineering a comprehensive analytics workflow focusing on financial operational metrics, business simulation logic, and interactive data wrangling pipelines using Python and Excel.
                  </p>
                </div>
              </div>
            </div>

          </div>
          
          <div className="view-all-container fade-in" style={{ marginTop: '50px', textAlign: 'right' }}>
            <Link href="/projects" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, fontFamily: 'monospace', letterSpacing: '1px', borderBottom: '1px solid #00d2ff', paddingBottom: '5px', transition: 'color 0.3s ease' }}>
              VIEW FULL ARCHIVE &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="services-section" style={{ width: '100%', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <div className="section-header fade-in" style={{ marginBottom: '50px' }}>
            <h2>What I Do</h2>
            <p>Bridging the gap between complex data logic and intelligent system integrations.</p>
          </div>

          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="card-icon"><i className="fas fa-network-wired"></i></div>
              <h3>Machine Learning Models</h3>
              <p>Developing predictive models and algorithms. Focused on training data, optimizing model accuracy, and deploying intelligent solutions for real-world problems.</p>
              <div className="tags">
                <span>Python</span>
                <span>Scikit-Learn</span>
              </div>
            </div>

            <div className="service-card fade-in delay-1">
              <div className="card-icon"><i className="fas fa-chart-line"></i></div>
              <h3>Data Analytics</h3>
              <p>Extracting actionable insights from raw datasets. Utilizing Python and Excel to process information, build business simulations, and create comprehensive data visualizations.</p>
              <div className="tags">
                <span>Python</span>
                <span>Excel</span>
                <span>Data Viz</span>
              </div>
            </div>

            <div className="service-card fade-in delay-2">
              <div className="card-icon"><i className="fas fa-microchip"></i></div>
              <h3>Hardware-AI Integration</h3>
              <p>Applying electrical engineering principles to integrate intelligent algorithms with IoT devices and hardware systems for automated control and logic design.</p>
              <div className="tags">
                <span>IoT</span>
                <span>Systems Architecture</span>
              </div>
            </div>
          </div>
          
        </div>
      </section>
        
      {/* --- RESUME SECTION --- */}
      <section id="resume" className="resume-section" style={{ width: '100%', padding: '100px 0', background: '#080808', borderTop: '1px solid #111', borderBottom: '1px solid #111' }}>
        <div className="container fade-in" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          
          <div className="resume-left" style={{ flex: 1, minWidth: '300px' }}>
            <p style={{ color: '#00d2ff', fontFamily: 'monospace', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px', marginTop: 0 }}>Experience & Education</p>
            <h2 style={{ fontSize: '2.3rem', fontWeight: 700, letterSpacing: '-1px', marginTop: 0, marginBottom: '15px' }}>Resume</h2>
            <p style={{ color: '#888888', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '550px', margin: 0 }}>
              A comprehensive overview of my academic background in Electrical Engineering, technical stack, and hands-on experience in Machine Learning and Data Systems.
            </p>
          </div>

          <div className="resume-right">
            <a href="https://drive.google.com/file/d/1w0Mj_SWptIk7xSJwuPOAFEaV14Ipm3hf/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-resume" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', backgroundColor: 'transparent', color: '#00d2ff', border: '1px solid rgba(0, 210, 255, 0.5)', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', textDecoration: 'none', transition: 'all 0.3s ease' }}>
              <i className="fas fa-file-pdf" style={{ marginRight: '10px', fontSize: '1.1rem' }}></i> View Resume
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
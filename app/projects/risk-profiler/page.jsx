import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function RiskProfiler() {
  return (
    <>
      <Navbar />

      <header className="project-hero fade-in" style={{ padding: '160px 20px 80px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <div className="project-hero-content">
          <div className="tags" style={{ marginBottom: '25px', justifyContent: 'center' }}>
            <span>FastAPI</span>
            <span>SHAP</span>
            <span>Random Forest</span>
          </div>
          
          <h1 style={{ fontSize: '3.2rem', fontWeight: 700, letterSpacing: '-1px', marginBottom: '25px', color: '#ffffff' }}>
            Risk Profiler for MSMEs
          </h1>
          
          <p className="subtitle" style={{ fontSize: '1.15rem', color: '#aaaaaa', lineHeight: 1.7, margin: '0 auto', maxWidth: '750px' }}>
            Automated credit risk assessment pipeline featuring SHAP-driven explainability and a production-ready REST API.
          </p>
        </div>
      </header>

      <section className="project-meta-section fade-in">
        <div className="meta-grid">
          <div className="meta-item">
            <span className="meta-label">Context</span>
            <span className="meta-value">Top 800 - PIDI Digdaya x Hackathon 2026</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Core Tech</span>
            <span className="meta-value">Python, Scikit-Learn, SHAP</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Deployment</span>
            <span className="meta-value">FastAPI, Pydantic</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Links</span>
            <span className="meta-value">
              <a href="https://github.com/Risk-Profiler/risk-profiler-backend" style={{ color: '#00d2ff' }} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </span>
          </div>
        </div>
      </section>

      <article className="project-content fade-in delay-1">
        <div className="text-block">
          <h2>System Architecture & Modeling</h2>
          <p>This project was developed to automate credit risk profiling for Micro, Small, and Medium Enterprises (MSMEs). I built a robust Python pipeline that handles data cleaning and custom financial feature engineering, specifically utilizing QRIS volume and utility delay ratios to capture nuanced financial behaviors.</p>
          <p>To ensure high reliability, the core model utilizes a data leakage-free RandomForestClassifier. The training process incorporates SMOTE for class balancing within a StratifiedKFold validation setup, successfully achieving a generalization gap of less than 0.026.</p>
        </div>

        <div className="text-block">
          <h2>Explainability & Deployment</h2>
          <p>A major focus of this project was breaking the "black box" nature of machine learning. I integrated Explainable AI using the SHAP framework to auto-generate natural language risk explanations, providing loan officers with clear, actionable insights into why a specific risk profile was assigned.</p>
          <p>Finally, the entire system was packaged and deployed as a production-ready REST API microservice utilizing FastAPI, with Pydantic handling strict schema validation for incoming data requests.</p>
        </div>
      </article>

      <section className="next-project-section">
        <p className="footer-label" style={{ textAlign: 'center' }}>Next Project</p>
        <Link href="/projects/fraud-detection" className="next-project-link">
          Financial Fraud Detection ML <i className="fas fa-arrow-right"></i>
        </Link>
      </section>

      <Footer />
    </>
  );
}
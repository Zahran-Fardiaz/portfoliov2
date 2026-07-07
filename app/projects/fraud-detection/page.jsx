import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function FraudDetection() {
  return (
    <>
      <Navbar />

      <header className="project-hero fade-in" style={{ padding: '160px 20px 80px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
        <div className="project-hero-content">
          <div className="tags" style={{ marginBottom: '25px', justifyContent: 'center' }}>
            <span>Random Forest</span>
            <span>PCA & Clustering</span>
            <span>Joblib</span>
          </div>
          
          <h1 style={{ fontSize: '3.2rem', fontWeight: 700, letterSpacing: '-1px', marginBottom: '25px', color: '#ffffff' }}>
            Financial Fraud Pipeline
          </h1>
          
          <p className="subtitle" style={{ fontSize: '1.15rem', color: '#aaaaaa', lineHeight: 1.7, margin: '0 auto', maxWidth: '750px' }}>
            An end-to-end ML pipeline mitigating financial risk through supervised fraud detection and unsupervised behavioral segmentation.
          </p>
        </div>
      </header>

      <section className="project-meta-section fade-in">
        <div className="meta-grid">
          <div className="meta-item">
            <span className="meta-label">Context</span>
            <span className="meta-value">Dicoding Academy Capstone</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">May 2026 – Jun 2026</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Techniques</span>
            <span className="meta-value">Classification, Clustering, PCA</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Links</span>
            <span className="meta-value">
              <a href="https://github.com/zahran-fardiaz/fraud-detection-ml-dicoding" style={{ color: '#00d2ff' }} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
            </span>
          </div>
        </div>
      </section>

      <article className="project-content fade-in delay-1">
        <div className="text-block">
          <h2>Supervised Fraud Detection</h2>
          <p>This pipeline features a robust supervised learning workflow engineered to detect fraudulent transactions. I utilized Random Forest and Decision Tree classifiers as the core algorithms. To combat the inherent class imbalance typical in fraud datasets, I implemented systematic majority-class downsampling and conducted rigorous hyperparameter tuning to eliminate model bias and ensure reliable predictions.</p>
        </div>

        <div className="text-block">
          <h2>Unsupervised Customer Segmentation</h2>
          <p>Beyond risk mitigation, the pipeline integrates behavioral analytics. I developed an unsupervised learning workflow utilizing K-Means Clustering combined with Principal Component Analysis (PCA). This dual approach effectively reduced dimensionality while segmenting customers based on their transactional behavior patterns.</p>
        </div>
        
        <div className="text-block">
          <h2>Serialization & Production</h2>
          <p>To bridge the gap between experimentation and production, all optimal models derived from the pipelines were successfully serialized using Joblib within an .h5 framework, ensuring they are fully prepared for deployment environments.</p>
        </div>
      </article>

      <section className="next-project-section">
        <p className="footer-label" style={{ textAlign: 'center' }}>Next Project</p>
        <Link href="/projects/risk-profiler" className="next-project-link">
          Risk Profiler for MSMEs <i className="fas fa-arrow-right"></i>
        </Link>
      </section>

      <Footer />
    </>
  );
}
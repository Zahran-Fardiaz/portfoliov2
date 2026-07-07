import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="footer-section" style={{ width: '100%' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <div className="footer-content fade-in">
                    <div className="footer-left">
                        <span className="footer-label">Send a Message</span>
                        <h2>Let's build something great together.</h2>
                        <form className="contact-form-minimal">
                            <div className="input-group">
                                {/* Notice how the input tags now have a closing slash at the end */}
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email*" required />
                            </div>
                            {/* rows="3" becomes rows={3} in JSX */}
                            <textarea placeholder="Tell me about your project...*" rows={3} required></textarea>
                            <button type="submit" className="btn-submit-minimal">
                                Send Request <i className="fas fa-arrow-right"></i>
                            </button>
                        </form>
                    </div>

                    <div className="footer-right delay-1">
                        <div className="footer-info-block">
                            <span className="footer-label">Direct Contact</span>
                            <a href="mailto:zahran24001@mail.unpad.ac.id" className="footer-email-large">
                                zahran24001@mail.unpad.ac.id
                            </a>
                            <div className="social-links-minimal">
                                <a href="https://www.linkedin.com/in/zahran-fardiaz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/Zahran-Fardiaz" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>

                        <div className="footer-info-block nav-block">
                            <span className="footer-label">Explore</span>
                            <div className="footer-nav-minimal">
                                {/* Standard anchor tags changed to Next.js Link components for internal routing */}
                                <Link href="/">Home</Link>
                                <Link href="/#projects">Work</Link>
                                <Link href="/#services">About</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
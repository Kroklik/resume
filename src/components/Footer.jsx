
const Footer = () => {
    return (
        <>
            <footer className="footer" id='contact'>
                <div className="container">
                    <h2 className="footer-title">Связаться со мной</h2>
                    <div className="footer-contact">
                        <div className="footer-item">
                            <span className="footer-icon">📧</span>
                            <a href="mailto:isaidamir24@gmail.com" className="footer-link">isaidamir24@gmail.com</a>
                        </div>
                        <div className="footer-item">
                            <span className="footer-icon">📞</span>
                            <a href="tel:+1234567890" className="footer-link">+998 94 712 97 12</a>
                        </div>
                        <div className="footer-item">
                            <span className="footer-icon">📱</span>
                            <a href="https://t.me/kuro4ka24" className="footer-link">Telegram</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
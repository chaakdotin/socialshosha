import React,{useState, useEffect} from 'react'
import './footer.css'
export default function Footer() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);
    return (
        <>
            <div className='d-flex flex-column w-100 px-2'>
                <div className='w-100 d-flex'>
                    <div className='col-4'>
                        <div>
                            <h2 className="section-title--light section-title p7 ttu fw440">
                                <span className="fw300">/&nbsp;</span>
                                Reach out
                            </h2>
                        </div>
                        <div className="footer-col__wrapper">
                            <div className="footer-col__inner">
                                <div className="p1 footer-col__copy footer-col__copy--inline slash-light">
                                    <p>
                                        <a href="mailto:info@socialshosha.com">info@socialshosha.com</a>
                                        <br />
                                        <a href="tel:8872727786">+91 8872727786</a>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-3' style={{ height: "325px" }}>
                        <div className="footer__fig">
                            <div className='footer__fig_img'>
                                <img className="base-image__img" loading="" decoding="async"
                                    src="https://www.datocms-assets.com/136821/1728381584-tshirtillustrationfinals_v05.png?fit=crop&amp;w=900"
                                    width="100%" height="100%" alt="" />
                           </div>
                        </div>
                    </div>
                    <div className="footer__inner col-5">
                        <div className="footer-col--mobile-acc footer-col--mobile-acc-open footer-col--address footer-col">
                            <div className="footer-col__title">
                                <h2 className="section-title--light section-title p7 ttu fw440"><span
                                    className="fw300">/&nbsp;</span>Find us</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91"
                                    className="footer-col__svg">
                                    <path
                                        d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="footer-col__wrapper">
                                <div className="footer-col__inner">
                                    <div className="p5 footer-col__copy slash-light">
                                        <a href="https://maps.app.goo.gl/fe8KazXCfyXxniSV6" target="_blank"
                                            className="footer-col__copy-link">
                                            <span className="text-splitter--splitted text-splitter">
                                                <div className='find_ud'>
                                                    <div className="footer__address-line">Social Shosha Private Limited </div>
                                                    <div className="footer__address-line">Second Floor, 23-SCF, SBS</div>
                                                    <div className="footer__address-line">Nagar, E Block, Market, </div>
                                                    <div className="footer__address-line">Ludhiana, Punjab 141013 </div>
                                                </div>
                                            </span>
                                        </a>
                                    </div>
                                    <ul className="footer-col__list p-0"></ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-col--mobile-acc footer-col--socials footer-col">
                            <div className="footer-col__title">
                                <h2 className="section-title--light section-title p7 ttu fw440">
                                    <span className="fw300">/&nbsp;</span>Social
                                </h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91"
                                    className="footer-col__svg">
                                    <path
                                        d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="footer-col__wrapper">
                                <div className="footer-col__inner">
                                    <ul className="footer-col__list p-0">
                                        <li className="footer-col__list-item p5">
                                            <a href="https://www.youtube.com/@SocialShosha" rel="noopener noreferrer"
                                                target="_blank" className="link footer-col__link">
                                                <span className="link__label">YouTube</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="https://www.instagram.com/socialshosha/" rel="noopener noreferrer"
                                                target="_blank" className="link footer-col__link">
                                                <span className="link__label">Instagram</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="https://x.com/SocialShosha" rel="noopener noreferrer" target="_blank"
                                                className="link footer-col__link">
                                                <span className="link__label">X</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="https://www.facebook.com/socialshosha?ref=pages_you_manage" rel="noopener noreferrer"
                                                target="_blank" className="link footer-col__link">
                                                <span className="link__label">Facebook</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="https://www.linkedin.com/company/social-shosha/?originalSubdomain=in"
                                                rel="noopener noreferrer" target="_blank" className="link footer-col__link">
                                                <span className="link__label">LinkedIn</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-col--mobile-acc footer-col--nav footer-col">
                            <div className="footer-col__title">
                                <h2 className="section-title--light section-title p7 ttu fw440"><span
                                    className="fw300">/&nbsp;</span>Nav</h2><svg xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 79 91" className="footer-col__svg">
                                    <path
                                        d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="footer-col__wrapper">
                                <div className="footer-col__inner">
                                    <ul className="footer-col__list p-0">
                                        <li className="footer-col__list-item p5">
                                            <a aria-current="page" href="/"
                                                className="router-link-active router-link-exact-active link footer-col__link">
                                                <span className="link__label">Home</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="/work" className="link footer-col__link">
                                                <span className="link__label">Work</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="/entertainment" className="link footer-col__link">
                                                <span className="link__label">Entertainment</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="/about" className="link footer-col__link">
                                                <span className="link__label">About</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="/blog" className="link footer-col__link">
                                                <span className="link__label">Feed</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="/podcast" className="link footer-col__link">
                                                <span className="link__label">Podcast</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5">
                                            <a href="/contact" className="link footer-col__link">
                                                <span className="link__label">Contact</span>
                                            </a>
                                        </li>
                                        <li className="footer-col__list-item p5"><a href="/shop"
                                            className="link footer-col__link">
                                            <span className="link__label">Shop</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className="footer__newsletter">
                        <div className="newsletter">
                            <form action="">
                                <div className="form-input">
                                    <div className="form-input__el-wrapper">
                                        <input className="form-input__el h3 fw470" type="email" name="email" required=""  placeholder="Newsletter" />
                                    </div>
                                </div>
                                <button type="submit" aria-label="Submit newsletter subscription form" className="newsletter__btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19" className="newsletter__svg">
                                        <path
                                            d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z">
                                        </path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="footer__bottom p4 ttu fw4470 slash-light">
                        <p className="footer__copyrights p-0 m-0">
                            ©  2025 |<span> Social Shosha & CHAAK</span>
                        </p>
                        <i className="footer__copyrights-slash">&nbsp;/&nbsp;</i>
                        <a href="/privacy" className="">Privacy</a>
                        <i className="footer__copyrights-slash">&nbsp;/&nbsp;</i>
                        <button 
                            onClick={scrollToTop}
                            aria-label="Scroll to the top of the page"
                            className="px-0 ttu back-to-top fw4470">Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}


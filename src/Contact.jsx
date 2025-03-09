import { useEffect, useState } from "react";
import './Contact.css'
const Contact = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const overlay = document.getElementById("overlay");
      if (overlay) {
        const overlayTop = overlay.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        setIsActive(overlayTop < viewportHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        <div className="base">Base Content Start</div>
        <div id="overlay" className={`overlay ${isActive ? "active" : ""}`}>
            <div className="contact-details page-bg">
                <div className="gutters">
                    <div className="intro">
                        <div className="structured-text intro__title h3">
                            <p>If you are excited to collaborate with The Line, feel totally free to get in touch. We’d love to chat
                                about what you got cooking. Give us a bell or shoot us an email. The deets of the best person to get in
                                touch with can be found below, and we’ll be in touch as soon as we can.</p>
                        </div>
                        <h2 className="section-title--pt section-title p7 ttu fw440"><span className="fw300">/&nbsp;</span>Reach Out</h2>
                    </div>
                </div>
                <div className="contact-details__list">
                  <div className="row text-left">
                    <div className="col-lg-4">
                      <div>
                        <img className="base-image__img w-100" loading="" decoding="async" src="https://www.datocms-assets.com/136821/1727546452-dscf6448.jpg?crop=focalpoint&amp;fit=crop&amp;fp-x=0.54&amp;fp-y=0.18&amp;h=1130&amp;w=1130"  alt=""/>
                      </div>
                      <h3 className="section-title--pt section-title p7 ttu fw440 pb-0"><span className="fw300">/&nbsp;</span>People</h3>
                      <h4 className="contact-details__list-item-title h4 ttu">Contact</h4>
                      <div className="list">
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">Commercials/Branded Content</p>
                          <div className="list__item-copy p5">
                            <p>Laura Breaden<br/>
                              <a href="mailto:newbusiness@thelineanimation.com">newbusiness@thelineanimation.com</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">HEAD OF DEVELOPMENT / IP</p>
                          <div className="list__item-copy p5">
                            <p>Lisa A. Smith<br />
                              <a href="mailto:originals@thelineanimation.com">originals@thelineanimation.com</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">GAMES</p>
                          <div className="list__item-copy p5">
                            <p>James Duveen
                              <br />
                              <a href="mailto:james@thelineanimation.com">
                                james@thelineanimation.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <img className="base-image__img w-100" loading="" decoding="async" src="https://www.datocms-assets.com/136821/1727546452-dscf6448.jpg?crop=focalpoint&amp;fit=crop&amp;fp-x=0.54&amp;fp-y=0.18&amp;h=1130&amp;w=1130"  alt=""/>
                      </div>
                      <h3 className="section-title--pt section-title p7 ttu fw440 pb-0"><span className="fw300">/&nbsp;</span>People</h3>
                      <h4 className="contact-details__list-item-title h4 ttu">Contact</h4>
                      <div className="list">
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">Commercials/Branded Content</p>
                          <div className="list__item-copy p5">
                            <p>Laura Breaden<br/>
                              <a href="mailto:newbusiness@thelineanimation.com">newbusiness@thelineanimation.com</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">HEAD OF DEVELOPMENT / IP</p>
                          <div className="list__item-copy p5">
                            <p>Lisa A. Smith<br />
                              <a href="mailto:originals@thelineanimation.com">originals@thelineanimation.com</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">GAMES</p>
                          <div className="list__item-copy p5">
                            <p>James Duveen
                              <br />
                              <a href="mailto:james@thelineanimation.com">
                                james@thelineanimation.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <img className="base-image__img w-100" loading="" decoding="async" src="https://www.datocms-assets.com/136821/1727546452-dscf6448.jpg?crop=focalpoint&amp;fit=crop&amp;fp-x=0.54&amp;fp-y=0.18&amp;h=1130&amp;w=1130"  alt=""/>
                      </div>
                      <h3 className="section-title--pt section-title p7 ttu fw440 pb-0"><span className="fw300">/&nbsp;</span>People</h3>
                      <h4 className="contact-details__list-item-title h4 ttu">Contact</h4>
                      <div className="list">
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">Commercials/Branded Content</p>
                          <div className="list__item-copy p5">
                            <p>Laura Breaden<br/>
                              <a href="mailto:newbusiness@thelineanimation.com">newbusiness@thelineanimation.com</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">HEAD OF DEVELOPMENT / IP</p>
                          <div className="list__item-copy p5">
                            <p>Lisa A. Smith<br />
                              <a href="mailto:originals@thelineanimation.com">originals@thelineanimation.com</a>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="list__item-subtitle p7 ttu fw440">GAMES</p>
                          <div className="list__item-copy p5">
                            <p>James Duveen
                              <br />
                              <a href="mailto:james@thelineanimation.com">
                                james@thelineanimation.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact-jobs">
                  <div className="module-subtitle-title gutters contact-jobs__header">
                    <h2 className="section-title p7 ttu fw440">
                      <span className="fw300">/&nbsp;</span>Opportunities
                    </h2>
                    <h3 className="module-subtitle-title__content h1 slash-light">
                      <span className="text-splitter--splitted text-splitter">
                        <div className="anim-line letter-J" style={{ display: "block", textAlign: "start", position: "relative" }}>
                          <div className="anim-word" style={{ position: "relative", display: "inline-block" }}>Join</div>
                        </div>
                        <div className="anim-line letter-T" style={{ display: "block", textAlign: "start", position: "relative" }}>
                          <div className="anim-word" style={{ position: "relative", display: "inline-block" }}>The</div>
                          <div className="anim-word" style={{ position: "relative", display: "inline-block" }}>Line</div>
                        </div>
                      </span>
                    </h3>
                  </div>
                  <span className="dot--10 dot--white dot--filled dot contact-jobs__dot"></span>
                  <p className="copyrights contact-jobs__meta ttu">THE LINE © MMXXV</p>
                  <h2 className="section-title p7 ttu fw440 gutters">
                    <span className="fw300">/&nbsp;</span>We're looking for
                  </h2>
                  
                  <ul className="grid contact-jobs__list">
                    <li className="contact-jobs__list-item">
                      <a href="https://airtable.com/appudpeFh7jchwFID/pagJpf2CfFVUDMnSX/form"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="link contact-jobs__list-item-link h4 fw470">
                        <span className="link__label">Treatment &amp; Graphic Designer</span>
                      </a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19" className="contact-jobs__list-item-svg">
                        <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
                      </svg>
                    </li>
                    
                    <li className="contact-jobs__list-item">
                      <a href="https://airtable.com/appC1HNkprNIL4SGE/pagji0TXRGbI7CDIV/form"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="link contact-jobs__list-item-link h4 fw470">
                        <span className="link__label">Prospective Application - Freelance Compositors</span>
                      </a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19" className="contact-jobs__list-item-svg">
                        <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
                      </svg>
                    </li>
                    
                    <li className="contact-jobs__list-item">
                      <a href="https://airtable.com/appC1HNkprNIL4SGE/pagji0TXRGbI7CDIV/form"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="link contact-jobs__list-item-link h4 fw470">
                        <span className="link__label">Prospective Application - Freelance Motion Graphics Artists</span>
                      </a>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 19" className="contact-jobs__list-item-svg">
                        <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z"></path>
                      </svg>
                    </li>
                  </ul>
                  
                  <figure className="contact-jobs__fig">
                    <picture className="base-image--loaded base-image">
                      <img className="base-image__img"
                          src="https://www.datocms-assets.com/136821/1723805930-ba_ch_pose.jpg?fit=crop&amp;w=1714"
                          
                          alt="Opportunities Image"
                          loading="lazy"
                          decoding="async" 
                          style={{width: "70%"}}
                          />
                    </picture>
                  </figure>
                </div>
              <div className="contact-faqs">
                <div className="module-subtitle-title gutters contact-faqs__header">
                  <h2 className="section-title p7 ttu fw440">
                    <span className="fw300">/&nbsp;</span>Ask Us
                  </h2>
                  <h3 className="module-subtitle-title__content h1 slash-light">
                    <span className="text-splitter--splitted text-splitter">
                      <div className="anim-line letter-F" style={{display: 'block', textAlign: 'start', position: 'relative'}}>
                        <div style={{position:'relative',display:'inline-block'}} className="anim-word">FAQs</div>
                      </div>
                    </span>
                  </h3>
                </div>
                <div className="d-flex">
                  <figure className="contact-faqs__fig col-lg-4">
                    <div className="base-image--fit base-image--loaded base-image">
                      <img className="base-image__img w-100" loading="" decoding="async" src="https://www.datocms-assets.com/136821/1727539929-dscf6713.jpg?fit=crop&amp;h=1130&amp;w=1130" width="1365" height="2048" alt="" />
                    </div>
                  </figure>
                  <div className="contact-faqs__wrapper col-lg-8">
                    <div className="accordion--open accordion">
                      <div className="accordion__header">
                        <p className="accordion__title h5 fw470">
                          <small className="accordion__id p7 fw440"> [&nbsp;01&nbsp;] </small>
                          Who is THE LINE?
                        </p>
                        <button className="accordion__button" aria-label="Close accordion">
                          <span className="accordion__button-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91" className="accordion__button-svg">
                              <path d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z"></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    <div className="accordion__content" style={{height: '233px'}}>
                      <div className="accordion__wrapper">
                        <div className="structured-text contact-faqs__content p5">
                          <p>Our studio was founded by six animators and artists who, while renting a space in East London, created short films. They established ‘THE LINE’ as a brand in 2013, and the studio has grown and levelled up ever since. We’re now 30+ in-house staff strong and have the obligatory studio dog, Ru, who also holds the title of Chief Welcoming Officer.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                        
                  <div className="accordion">
                    <div className="accordion__header">
                      <p className="accordion__title h5 fw470">
                        <small className="accordion__id p7 fw440"> [&nbsp;02&nbsp;] </small> 
                        What does your process look like?
                      </p>
                      <button className="accordion__button" aria-label="Open accordion">
                        <span className="accordion__button-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91" className="accordion__button-svg">
                            <path d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__wrapper">
                        <div className="structured-text contact-faqs__content p5">
                          <p>Each project is unique, so we tailor our approach to suit. We typically start with a creative brief and script, whether it’s well-defined or still in development. We love getting involved early and are very experienced in refining briefs &amp; scripts to craft a film that meets your needs.</p>
                          <p>From there, we move into concepting, character design, storyboarding, and animatics to plan the story, visuals, and pacing. Once finalised, we animate, add effects, and deliver the finished piece. Throughout, we provide regular updates and feedback to keep everything on track and within budget.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__header">
                      <p className="accordion__title h5 fw470">
                        <small className="accordion__id p7 fw440"> [&nbsp;03&nbsp;] </small> How much for an animation?
                      </p>
                      <button className="accordion__button" aria-label="Open accordion">
                        <span className="accordion__button-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91" className="accordion__button-svg">
                            <path d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__wrapper">
                        <div className="structured-text contact-faqs__content p5">
                          <p>Our pricing is based on several factors, including the style, length, complexity of the project, and the
                            level of detail required. We typically work on larger-scale projects, but we’re always willing to have a
                            conversation about how we can tailor our services to fit your budget.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__header">
                      <p className="accordion__title h5 fw470">
                        <small className="accordion__id p7 fw440"> [&nbsp;04&nbsp;] </small> 
                        How can I workat The Line?
                      </p>
                      <button className="accordion__button" aria-label="Open accordion">
                        <span
                          className="accordion__button-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91"
                            className="accordion__button-svg">
                            <path d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__wrapper">
                        <div className="structured-text contact-faqs__content p5">
                          <p>
                            We have a full time in-house team and work with freelancers regularly. Check out our jobs listings to apply
                            for any open permanent roles within the company. We’re also consistently looking to expand our pool of
                            talented freelancers so if that’s you, please send your portfolio and CV to
                            <a
                              href="mailto:jobs@thelineanimation.com">jobs@thelineanimation.com</a>. 
                            If your profile matches what we’re looking for, we’ll add you to our database and reach out when the right project comes along. As much as we’d
                            love to, we can’t reply or offer feedback to portfolio submissions. We’ll be in touch should the right project
                            come our way.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__header">
                      <p className="accordion__title h5 fw470">
                        <small className="accordion__id p7 fw440"> [&nbsp;05&nbsp;] </small> 
                        Do you offer work experience or internships?
                      </p>
                      <button className="accordion__button" aria-label="Open accordion">
                        <span
                          className="accordion__button-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91" className="accordion__button-svg">
                            <path d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z"> </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__wrapper">
                        <div className="structured-text contact-faqs__content p5">
                          <p>At times we do,&nbsp; but there are a few factors that decide whether we can accommodate these programmes
                            each year. If we are able to, we will always announce it on our social media channels and on our website. If
                            you’re interested in one of these programmes, it’s best to follow us @thelineanimation and keep an eye out for
                            any announcements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="accordion__header">
                      <p className="accordion__title h5 fw470">
                        <small className="accordion__id p7 fw440"> [&nbsp;06&nbsp;] </small>
                        Can I send you my script or film idea?
                      </p>
                      <button className="accordion__button" aria-label="Open accordion">
                        <span
                          className="accordion__button-inner">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 79 91" className="accordion__button-svg">
                            <path d="m7.233 44.216 32.196 32.52 32.196-32.662L79 51.205 39.43 91 0 51.348zM44.961 0v82.014H33.898V0z">
                            </path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div className="accordion__content">
                      <div className="accordion__wrapper">
                        <div className="structured-text contact-faqs__content p5">
                          <p>Thanks so much for thinking of us for your creative project, but we do not accept any kind of creative
                            submissions. All of our ideas and stories are developed internally and for legal reasons we cannot consider
                            any unsolicited creative material (scripts, synopses, sketches, etc).</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="base">Base Content End</div>
        
    </>
  )
};

export default Contact;

import Accordion from 'react-bootstrap/Accordion';
import css from './Newpage.css?raw';
function newPage() {
    return (
      <>
        <style>{css}</style>
        <div className='w-100' style={{height:75}}></div>
        <div className="d-flex flex-column px-3">
          <div className='col-7 pb-4'>
            <h1 className='text-h1'>CGI Ads & Production Shoots</h1>
          </div>
          <div className='d-flex col-12 '>
            <div className='col-6 d-flex flex-column gap-3'>
              <div className="">
                <p className="text-p p-large ">Creating Visuals That Captivate.</p>
              </div>
              <div className="text-wrapper">
                <p className="text-p p-large no-margin ">Visual content is the most powerful way to tell a story. We specialize in high-end CGI ads and production shoots that elevate your brand’s messaging.</p>
              </div>
              <div className="text-wrapper">
                <p className="text-p p-large no-margin ">From 3D animations to immersive visual effects, our productions go beyond traditional advertising. We create content that sparks curiosity and leaves an unforgettable impression.</p>
              </div>
            </div>
            <div className="col-6">
              <Accordion >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <span className="ac-order">(01)</span> <span>Accordion Item</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <span className="ac-order">(02)</span> <span>Accordion Item</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <span className="ac-order">(03)</span> <span>Accordion Item</span>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default newPage;
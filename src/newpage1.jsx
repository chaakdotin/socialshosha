import Accordion from 'react-bootstrap/Accordion';
import css from './Newpage.css?raw';

function newPage() {
    return (
      <>
        <style>{css}</style>
        <div className='w-100' style={{height:75}}></div>
        <div className="d-flex flex-column px-3">
          <div className='col-7 pb-4'>
            <h1 className='text-h1'>SEO & Digital Marketing</h1>
          </div>
          <div className='d-flex col-12 '>
            <div className='col-6 d-flex flex-column gap-3'>
              <div className="">
                <p className="text-p p-large "> Boosting Visibility, Driving Growth.</p>
              </div>
              <div className="text-wrapper">
                <p className="text-p p-large no-margin "> Your brand deserves to be seen, and we make sure it ranks at the top. Our SEO strategies focus on organic growth, higher search rankings, and increased brand awareness.</p>
              </div>
              <div className="text-wrapper">
                <p className="text-p p-large no-margin ">Beyond SEO, we implement data-driven digital marketing strategies that attract, engage, and convert audiences. From content marketing to paid ads, we optimize every step of the customer journey.</p>
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
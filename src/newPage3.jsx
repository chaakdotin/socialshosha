import Accordion from 'react-bootstrap/Accordion';
import css from './Newpage.css?raw';
function newPage() {
    return (
      <>
        <style>{css}</style>
        <div className='w-100' style={{height:75}}></div>
        <div className="d-flex flex-column px-3">
          <div className='col-7 pb-4'>
            <h1 className='text-h1'>Branding & Graphic Design</h1>
          </div>
          <div className='d-flex col-12 '>
            <div className='col-6 d-flex flex-column gap-3'>
              <div className="">
                <p className="text-p p-large ">Turning Ideas into Iconic Identities.</p>
              </div>
              <div className="text-wrapper">
                <p className="text-p p-large no-margin ">A strong brand identity is the foundation of any successful business. We shape brands with compelling visuals, unique elements, and a strong narrative.</p>
              </div>
              <div className="text-wrapper">
                <p className="text-p p-large no-margin ">From logo creation to full-scale brand guidelines, our designs are tailored to make a lasting impact. Every pixel, color, and font is chosen to resonate with your audience.</p>
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
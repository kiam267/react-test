import AboutImage from "../AboutImage"

export default function About() {
  return (
    <section className="container-xxl">
      <h1 className="fw-bold text-center py-3">HISTORY OF SCHOOL</h1>
      <div className="row">
        <AboutImage/>
        <div className="col-12 mt-3 p-3">
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <h1 className="fw-bold">BAUSHA R. N. HEIGHT SCHOOL</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                ut reiciendis vel, dolor consequatur iste reprehenderit
                eligendi? Est, at vero? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias earum facere ad velit vero
                praesentium quam repellendus. Nemo nisi adipisci at et nesciunt
                non ducimus est veritatis omnis perferendis, facilis maiores
                doloremque provident libero similique in earum voluptatibus
                officia natus voluptates cum atque aperiam beatae? Possimus,
                pariatur. Officia libero earum consequuntur voluptatum nisi
                eligendi itaque veniam et porro quos, doloremque in nesciunt
                voluptate beatae animi repellat pariatur nulla, perspiciatis
                autem hic! Id minima vitae tempore. Velit commodi aliquam fugit,
                veniam, ullam maxime sequi dolor voluptatum quibusdam aspernatur
                perferendis doloremque! Consequuntur, blanditiis recusandae
                tenetur odio reprehenderit velit! Iste delectus perspiciatis
                minima.
              </p>
            </div>
            <div className="col-sm-12 col-md-5">
                    <div className="py-3 px-2 rounded-2" style={{ background: '#e6be1e' }}>
                <div className="d-flex py-2 text-white">
                  <b className="d-flex align-items-center px-1">
                    <span className="material-icons px-1 text-white">
                      history_edu
                    </span>
                    Establish :
                  </b>
                  <span className="text-white">01 Jun 1966</span>
                </div>
                <div className="d-flex text-white py-2">
                  <b className="d-flex align-items-center px-1">
                    <span className="material-icons px-1 text-white">
                      school
                    </span>
                    Education :
                  </b>
                  <span className="text-white"> Heigh School</span>
                </div>
                <div className="d-flex text-white py-2">
                  <b className="d-flex align-items-center px-1">
                    <span className="material-icons px-1 text-white">
                      school
                    </span>
                    Education :
                  </b>
                  <span className="text-white"> Heigh School</span>
                </div>
                <div className="d-flex text-white py-2">
                  <b className="d-flex align-items-center px-1">
                    <span className="material-icons px-1 text-white">
                      school
                    </span>
                    Education :
                  </b>
                  <span className="text-white"> Heigh School</span>
                </div>
                <div className="d-flex text-white py-2">
                  <b className="d-flex align-items-center px-1">
                    <span className="material-icons px-1 text-white">
                      {" "}
                      school{" "}
                    </span>
                    Education :
                  </b>
                  <span className="text-white"> Heigh School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

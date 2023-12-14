// import { getAboutMe } from "@/utils/sanity";
import { client } from "@/utils/sanity";

export async function getAboutMe() {
  const query = `
    *[_type == "aboutMe"][0] {
        name,
        description,
        date_of_birth,
        email,
        phone,
        address,
        zip_code,
      }`;

  const data = await client.fetch(query);
  return data;
}

export async function About() {
  const about = await getAboutMe();

  return (
    <section
      className="ftco-about img ftco-section ftco-no-pb"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay"></div>
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{ backgroundImage: "url(images/bg_1.png)" }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
            <div className="row justify-content-start pb-3">
              <div className="col-md-12 heading-section ftco-animate">
                <h1 className="big">About</h1>
                <h2 className="mb-4">About Me</h2>
                <p>{about.description}</p>
                <ul className="about-info mt-4 px-md-0 px-2">
                  <li className="d-flex">
                    <span>Name:</span> <span>{about.name}</span>
                  </li>
                  <li className="d-flex">
                    <span>Date of birth:</span>{" "}
                    <span>{about.date_of_birth}</span>
                  </li>
                  <li className="d-flex">
                    <span>Address:</span>
                    <span>{about.address}</span>
                  </li>
                  <li className="d-flex">
                    <span>Zip code:</span> <span>{about.zip_code}</span>
                  </li>
                  <li className="d-flex">
                    <span>Email:</span> <span>{about.email}</span>
                  </li>
                  <li className="d-flex">
                    <span>Phone: </span> <span>{about.phone}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="counter-wrap ftco-animate d-flex mt-md-3">
              <div className="text">
                {/* <p className="mb-4">
                  <span className="number" data-number="120">
                    0
                  </span>
                  <span>Project complete</span>
                </p> */}
                <p>
                  <a
                    href="/assets/anjum_zia_cv.pdf"
                    className="btn btn-primary py-3 px-3"
                  >
                    Download CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

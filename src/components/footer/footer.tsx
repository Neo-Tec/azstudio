import { client } from "@/utils/sanity";

export async function getSocialLinks() {
  const query = `
    *[_type == "socialLinks"][0] {
        instagram_id,
        facebook_id,
        twitter_id,
        linkedin_id,
      }`;

  const data = await client.fetch(query);
  return data;
}

interface IFooterData {
  services: string[];
  about: string;
  location: string;
  email: string;
  phone: string;
}

export async function getFooterData(): Promise<IFooterData> {
  const query = `
    *[_type == "footer"][0] {
      services,
      about,
      location,
      email,
      phone
    }`;

  const data = await client.fetch(query);
  return data;
}

export async function Footer() {
  const social = await getSocialLinks();
  const footer = await getFooterData();

  return (
    <>
      <footer className="ftco-footer ftco-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">About</h2>
                <p>{footer.about}</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                  <li className="ftco-animate">
                    <a href={social.twitter_id}>
                      <span className="icon-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href={social.facebook_id}>
                      <span className="icon-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate">
                    <a href={social.instagram_id}>
                      <span className="icon-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#home-section">
                      <span className="icon-long-arrow-right mr-2"></span>Home
                    </a>
                  </li>
                  <li>
                    <a href="#about-section">
                      <span className="icon-long-arrow-right mr-2"></span>About
                    </a>
                  </li>
                  <li>
                    <a href="#skills-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#projects-section">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Projects
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">
                      <span className="icon-long-arrow-right mr-2"></span>
                      Contact
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  {footer.services.map((service) => (
                    <li key={service}>
                      <span className="icon-long-arrow-right mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li>
                      <span className="icon icon-map-marker"></span>
                      <span className="text">{footer.location}</span>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-phone"></span>
                        <span className="text">{footer.phone}</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon icon-envelope"></span>
                        <span className="text">{footer.email}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- loader --> */}
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div>
    </>
  );
}

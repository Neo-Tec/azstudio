import { client } from "@/utils/sanity";
import { Skill } from "./skill";

export async function getSkills() {
  const query = `
    *[_type == "skills"][0] {
        skill
      }`;

  const data = await client.fetch(query);
  return data;
}

export async function Skills() {
  const skills = await getSkills();

  return (
    <section className="ftco-section" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            {/* <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p> */}
          </div>
        </div>
        <div className="row">
          {skills.skill.map((skill: any) => (
            <Skill key={skill.skill_name} {...skill} />
          ))}

          {/* <!-- <div className="watch-video d-flex align-items-center position-relative">
          <i className="bi bi-play-circle"></i>
          <a
            href="https://www.youtube.com/watch?v=eK0IIyBlYew"
            className="glightbox stretched-link"
            >Watch Video</a
          >
        </div> -->
        <!-- <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>CSS3</h3>
            <div className="progress">
              <div
                className="progress-bar color-4"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 90%"
              >
                <span>90%</span>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div className="col-md-6 animate-box">
          <div className="progress-wrap ftco-animate">
            <h3>WordPress</h3>
            <div className="progress">
              <div
                className="progress-bar color-5"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 70%"
              >
                <span>70%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box"> -->
        <!-- <div className="progress-wrap ftco-animate">
            <h3>SEO</h3>
            <div className="progress">
              <div
                className="progress-bar color-6"
                role="progressbar"
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
                style="width: 80%"
              >
                <span>80%</span>
              </div>
            </div>
          </div> -->
        <!-- </div> --> */}
        </div>
      </div>
    </section>
  );
}

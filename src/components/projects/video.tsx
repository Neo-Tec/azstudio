import { urlFor } from "@/utils/sanity/client";

interface VideoProps {
  thumbnail: any;
  title: string;
  video_link: string;
}

export function Video(props: VideoProps) {
  return (
    <a className="glightbox col-md-6" href={props.video_link}>
      <div
        className="project img ftco-animate d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${urlFor(props.thumbnail).width(500).url()})`,
        }}
      >
        <div className="overlay"></div>
        <div className="text text-center p-4">
          <h3>{props.title}</h3>
        </div>
      </div>
    </a>
  );
}

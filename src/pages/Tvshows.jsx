import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../utils/Loader";

export default function Tvshows({ data }) {
  console.log(data);
  return (
    <>
      {!data ? (
        <Loader />
      ) : (
        <Container
          fluid
          className="home-section2 Tvshows d-flex flex-wrap justify-content-center gap-5"
        >
          {data?.map((show) => (
            <Link key={show.id} to={`/tvshows/${show.id}`}>
              <div className="movie-card">
                <div
                  className="mycard"
                  style={{
                    backgroundImage: `url(${show.image.medium})`,
                  }}
                  data-aos="fade-up-right"
                  data-aos-duration="500"
                >
                  <div className="text-body">
                    <div className="text-body-inner">
                      <h1 className="fs-4">{show.name}</h1>
                      <p
                        className="movie-card-text"
                        dangerouslySetInnerHTML={{
                          __html: show.summary.slice(0, 30) + `...`,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Container>
      )}
    </>
  );
}

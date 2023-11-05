/* eslint-disable react/prop-types */
const Card = ({
  image,
  postedSince,
  cardTitle,
  cardDescription,
  reads,
  views,
  comments,
  index,
}) => {
  let color;

  if (index === 0) {
    color = "#ff0000";
  } else if (index === 1) {
    color = "#F1A800";
  } else {
    color = "#008000";
  }

  return (
    <div className="card__container">
      <div className="card__image__container">
        <img src={image} alt="card image" />
      </div>

      <div className="card__body">
        <span style={{ color: color }}> {postedSince} </span>
        <h1> {cardTitle} </h1>
        <p>{cardDescription}</p>
      </div>

      <div className="card__footer" style={{ backgroundColor: color }}>
        <div className="card__footer_element">
          <p> {reads} </p>
          <span>Reads</span>
        </div>
        <div className="card__footer_element">
          <p> {views} </p>
          <span>Views</span>
        </div>
        <div className="card__footer_element">
          <p> {comments} </p>
          <span>Comments</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

const Card = ({ img, heading, desc }) => {
  return (
    <div className="card">
      <img className="card-img" src={img} alt="" />
      <div className="card-info">
        <div className="card-titel">{heading}</div>
        <p className="card-desc">{desc}</p>
        <a className="card-link" href="">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;

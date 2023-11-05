import "../src/styles/third_section.css";
import Card from "./Card";

const data = [
  {
    image: "https://media.routard.com/image/61/1/photo.1561611.w630.jpeg",
    postedSince: "4 Days Ago",
    cardTitle: "Post One",
    cardDescription:
      "Croque Monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jak croque",
    reads: "7",
    views: "3224",
    comments: "21",
  },
  {
    image: "https://media.routard.com/image/61/1/photo.1561611.w630.jpeg",
    postedSince: "1 Week Ago",
    cardTitle: "Post Two",
    cardDescription:
      "Croque Monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jak croque",
    reads: "11",
    views: "1699",
    comments: "27",
  },
  {
    image: "https://media.routard.com/image/61/1/photo.1561611.w630.jpeg",
    postedSince: "4 Weeks Ago",
    cardTitle: "Post Three",
    cardDescription:
      "Croque Monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jak croque",
    reads: "4",
    views: "1624",
    comments: "1",
  },
];

const ThirdSection = () => {
  return (
    <div className="section__container">
      {data.map((element, index) => (
        <Card
          key={index}
          image={element.image}
          postedSince={element.postedSince}
          cardTitle={element.cardTitle}
          cardDescription={element.cardDescription}
          reads={element.reads}
          views={element.views}
          comments={element.comments}
          index={index}
        />
      ))}
    </div>
  );
};

export default ThirdSection;

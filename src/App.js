import "./App.css";
import Card from "./Card";

function App() {
  const name = [
    {
      name: "TITANIC",
      image:
        "https://c8.alamy.com/comp/PXNB7R/titanic-original-movie-poster-PXNB7R.jpg",
    },
    {
      name: "DANGAL",
      image: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    },
    {
      name: "HERO",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTQ0NzAyMTIyOF5BMl5BanBnXkFtZTgwMTE2MTY3NjE@._V1_.jpg",
    },
    {
      name: "GENIUS",
      image:
        "https://images.indianexpress.com/2018/08/genius-movie-review-759.jpg",
    },
    {
      name: "DIL",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuOVXVWaOzce-ySqlVADcYge2Rt5kHXUlaQ&usqp=CAU",
    },
    {
      name: "BABY",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO57YZv0AcbjGISVzjFzo3QCZ1laBUDz6Zf8HalRNkZY2WVFapraa_KB9GMNpUC61wPLM&usqp=CAU",
    },
  ];

  return (
    <div className="cardtemplate">
      {name.map((ele) => (
        // console.log(ele.image  )
        <Card image={ele.image} name={ele.name} />
      ))}
    </div>
  );
}

export default App;

import React from "react";
import ReactDom from "react-dom";

import "./index.css";

//stateless functional component
//always return jsx

//this function is capitalized ,
//it is a COMPONENT!!!

//JSX RULES :
//always return a single element
//div section fragment article
//use camelcase
//className instead of Class
//closing every single element
//formatting

// function Greeting() {
//   return (
//     <div>
//      <Person />
//      <Message />
//     </div>
//   );
// }

// const Person = () => <h3> lilyane fawaz</h3>;

// const Message = () => {
//   return <p>this is a message</p>;
// };

// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world!");
// };

function BoolList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Amelia Hepworth";
const Book = () => {
  const title = "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg"
        alt=""
      />
      <h1> {title}</h1>
      <h4>{author}</h4>
      <p>{6 + 6}</p>
    </article>
  );
};

ReactDom.render(<BoolList />, document.getElementById("root"));

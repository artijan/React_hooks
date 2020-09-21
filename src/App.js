import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useScroll = () => {
  const { state, setState } = useState({
    x: 0,
    y: 0
  });

  const onscroll = (event) => {
    console.log(event);
  };

  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
};

const App = () => {
  const { y } = useScroll();
  return (
    <div className="App" sytle={{ height: "100vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
};

export default App;

// const App = () => {
//   const sayHello = () => console.log("hello");

//   const [number, setNumber] = useState(0);
//   const [aNumber, setAnumber] = useState(0);
//   useEffect(sayHello, [number]);
//   return (
//     <div className="App">
//       <div>Hi</div>
//       <button onClick={() => setNumber(number + 1)}>{number}</button>
//       <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
//     </div>
//   );
// };

// export default App;

// export const App = () => {
//   const [item, setItem] = useState(1);
//   const incrementItem = () => setItem(item + 1);
//   const decrementItem = () => setItem(item - 1);

//   return (
//     <div className="App">
//       <h1>Hello {item}</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button onClick={incrementItem}>Increment</button>
//       <button onClick={decrementItem}>Decrement</button>
//     </div>
//   );
// };

// class AppUgly extends React.Component {
//   state = {
//     item: 1
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>This is ugly coding</h2>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.decrementItem}>Decrement</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1
//       };
//     });
//   };
// }

// export default AppUgly;

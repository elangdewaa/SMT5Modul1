const { useState } = React;
const { render } = ReactDOM;

function Cat() {
  const [isHungry, setIsHungry] = useState(0);

  const handleDecrease = () => {
    setIsHungry((prevIsHungry) => prevIsHungry - 1);
  };

  const handleIncrease = () => {
    setIsHungry((prevIsHungry) => prevIsHungry + 1);
  };

  return (
    <div>
      <h1>{isHungry}</h1>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleIncrease}>+1</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Cat />);

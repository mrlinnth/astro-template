function GreetingButtion({ name }: { name: string }) {
  const handleClick = () => {
    alert(`Hello ${name}`);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Greet me
    </button>
  );
}

export default GreetingButtion;

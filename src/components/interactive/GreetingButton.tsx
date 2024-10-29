function GreetingButtion({ name }: { name: string }) {
  const handleClick = () => {
    alert(`Hello ${name}`);
  };

  return (
    <button className="btn btn-secondary" onClick={handleClick}>
      Greet me
    </button>
  );
}

export default GreetingButtion;

import Button from "@/components/static/Button.astro";

function GreetingButtion() {
  const handleClick = async () => {
    alert("Helloooo");
  };

  return <Button onClick={handleClick}>Greet me</Button>;
}

export default GreetingButtion;

import { actions } from "astro:actions";
function GreetingButtion() {
  const handleClick = async () => {
    // Show alert pop-up with greeting from action
    const { data, error } = await actions.getGreeting({ name: "Houston" });
    if (!error) alert(data);
  };
}

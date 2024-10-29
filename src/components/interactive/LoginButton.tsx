import { userAtom } from "@/utils/atoms";
import { useRecoilState } from "recoil";

function LoginButton({ name }: { name: string }) {
  const [user, setUser] = useRecoilState(userAtom);

  const handleClick = () => {
    setUser({ id: 1, name: name });
  };

  return user === null ? (
    <button className="btn btn-primary" onClick={handleClick}>
      Log In
    </button>
  ) : (
    <button className="btn btn-outline">Welcome {user.name}!</button>
  );
}

export default LoginButton;

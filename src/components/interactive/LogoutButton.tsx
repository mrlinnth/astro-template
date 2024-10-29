import { userAtom } from "@/utils/atoms";
import { useRecoilValue, useResetRecoilState } from "recoil";

function LogoutButton() {
  const resetUser = useResetRecoilState(userAtom);
  const user = useRecoilValue(userAtom);

  return (
    <button
      className="btn btn-warning"
      onClick={resetUser}
      disabled={user === null}
    >
      Log Out
    </button>
  );
}

export default LogoutButton;

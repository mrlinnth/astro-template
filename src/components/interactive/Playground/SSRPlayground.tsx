import GreetingButtion from "@/components/interactive/GreetingButton";
import LoginButton from "@/components/interactive/LoginButton";
import LogoutButton from "@/components/interactive/LogoutButton";
import ReactContainer from "@/layouts/ReactContainer";
import { RecoilRoot } from "recoil";

interface PropsInterface {
  hello: string;
}
export function SSRPlayground({ hello }: PropsInterface) {
  /*
   * const user = useRecoilValue(userAtom);
   *
   * IMPORTANT.
   * This will not work.
   * Recoil hooks must be used in the components which are inside RecoilRoot
   *
   */

  return (
    <RecoilRoot>
      <ReactContainer>
        <div className="grid grid-flow-col gap-4">
          <GreetingButtion name={hello} />
          <LoginButton name={hello} />
          <LogoutButton />
        </div>
      </ReactContainer>
    </RecoilRoot>
  );
}

export default SSRPlayground;

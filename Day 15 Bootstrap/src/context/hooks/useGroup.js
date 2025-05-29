import { useContext } from "react";
import GroupContext from "../GroupContext";

function useGroup() {
  return useContext(GroupContext);
}

export default useGroup;

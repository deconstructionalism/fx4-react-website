import { useSelectedLayoutSegments } from "next/navigation";
import NAV_CONFIG from "../_config/nav";

const useHasSubMenu = () => {
  // STATE

  const segments = useSelectedLayoutSegments();

  // LOGIC

  const firstSegment = segments[0] || "";
  const navItemConfig = NAV_CONFIG.find(
    ({ href }) => href.replace("/", "") === firstSegment,
  );
  const subNavConfig = navItemConfig?.subNavConfig;

  return subNavConfig
}

export default useHasSubMenu;
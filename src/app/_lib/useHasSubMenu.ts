import { useSelectedLayoutSegments } from "next/navigation";

import NAV_CONFIG from "config/nav";

import cursor from "@/app/_db/cursor";

const useHasSubMenu = () => {
  // STATE

  const segments = useSelectedLayoutSegments();

  // LOGIC

  const firstSegment = segments[0] || "";
  const navItemConfig = NAV_CONFIG.find(
    ({ href }) => href.replace("/", "") === firstSegment,
  );
  console.log(segments);
  const subNavConfig =
    firstSegment === "locations" && segments.length === 1
      ? undefined
      : navItemConfig?.subNavConfig;

  return subNavConfig;
};

export default useHasSubMenu;

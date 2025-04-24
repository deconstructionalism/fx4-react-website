import { useSelectedLayoutSegments } from "next/navigation";

import NAV_CONFIG from "config/nav";

import cursor from "@/app/_db/cursor";

const useHasSubMenu = () => {
  // DATA

  const { comingSoon2025 } = cursor.get("featureFlags");

  // STATE

  const segments = useSelectedLayoutSegments();

  // LOGIC

  const firstSegment = segments[0] || "";
  const navItemConfig = NAV_CONFIG.find(
    ({ href }) => href.replace("/", "") === firstSegment,
  );
  const subNavConfig =
    firstSegment === "locations" && comingSoon2025.active
      ? undefined
      : navItemConfig?.subNavConfig;

  return subNavConfig;
};

export default useHasSubMenu;

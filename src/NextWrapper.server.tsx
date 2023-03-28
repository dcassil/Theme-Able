import { getThemeData, TypeTarget, TypeThemeData } from "./api";
import { getComponentStyles } from "./api";

export default function NextComponentWrapper({ instanceId, tag, children }) {
  let themeItemData = getThemeData().then((data: TypeThemeData) => {
    return data.targets.find(
      (themeItem) => themeItem.instanceId === instanceId
    );
  });

  return (
    <>
      <style jsx>{getComponentStyles(themeItemData)}</style>
      {children}
    </>
  );
}

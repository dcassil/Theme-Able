import { getThemeData, TypeTarget, TypeThemeData } from "./api";
import { getComponentStyles } from "./api";

export default async function NextComponentWrapper({
  instanceId,
  tag,
  children,
}) {
  let themeItemData = (await getThemeData()).targets.find(
    (themeItem) => themeItem.instanceId === instanceId
  );

  return (
    <>
      <style scoped>{getComponentStyles({ themeItemData })}</style>
      {children}
    </>
  );
}

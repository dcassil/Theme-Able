import React, { useEffect, useState } from "react";
import {
  getComponentStyles,
  getThemeData,
  TypeTarget,
  TypeThemeData,
} from "./api";

export default function ComponentWrapper({ instanceId, children }) {
  let [themeItemData, setThemeItemData] = useState<TypeTarget | undefined>();

  useEffect(() => {
    let data = getThemeData().then((resData: TypeThemeData) => {
      setThemeItemData(
        resData.targets.find(
          (themeTarget: TypeTarget) => themeTarget.instanceId === instanceId
        )
      );
    });
  }, []);

  return (
    <>
      <style scoped>{getComponentStyles({ themeItemData })}</style>
      {children}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { getThemeData } from "./api";

export default function ComponentWrapper({ instanceId, children }) {
  let [themeItemData, setThemeItemData] = useState();

  useEffect(() => {
    let data = getThemeData().then((resData: []) => {
      setThemeItemData(
        resData.find((themeItem) => themeItem.instanceId === instanceId)
      );
    });
  }, []);

  return (
    <>
      <style jsx>{getComponentStyles(themeItemData)}</style>
      {children}
    </>
  );
}

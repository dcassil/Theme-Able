export function getThemeData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(testData);
    }, 100);
  });

  return promise;
}

export function getComponentStyles({
  themeItemData,
}: {
  themeItemData: TypeTarget;
}) {
  if (themeItemData === undefined) {
    return "";
  }

  return buildStylesString(themeItemData);
}

function buildStylesString(itemData: TypeTarget) {
  let rulesString = "";

  if (itemData.instanceId !== undefined) {
    rulesString = `[data-theme-instanceId=${itemData.instanceId}] { `;
  } else {
    rulesString = `[data-theme-tag=${itemData.tag}]`;
  }

  itemData.styles.forEach((style: TypeStyle) => {
    rulesString += `${style.name}: ${style.value} !important; `;
  });

  rulesString += "}";

  return rulesString;
}

export type TypeStyle = {
  name: string;
  value: string;
};

export type TypeTarget = {
  tag: string;
  instanceId?: string;
  styles: TypeStyle[];
};

export type TypeThemeData = { name: string; targets: TypeTarget[] };

const testData: Record<string, TypeThemeData> = {
  userThemeRed: {
    name: "User theme red",
    targets: [
      {
        tag: "textInput",
        instanceId: "button1",
        styles: [{ name: "color", value: "red" }],
      },
    ],
  },
};
``;

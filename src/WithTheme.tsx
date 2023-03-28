import React from "react";
import NextComponentWrapper from "./NextWrapper.server";
import ReactWrapper from "./ReactWrapper";
import { StyleHTMLAttributes } from "../types";

export function WithTheme(Child) {
  return (props) => {
    let Wrapper = props.ssr ? NextComponentWrapper : ReactWrapper;

    return () => (
      <Wrapper instanceId={props.instanceId} tag={props.tag}>
        <Child
          {...props}
          {...{
            "data-theme-tag": props.tag,
            "data-theme-id": props.instanceId,
          }}
        />
      </Wrapper>
    );
  };
}

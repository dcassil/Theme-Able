// custom.d.ts
import "react";
import { HTMLAttributes } from "react";

export interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
  jsx?: boolean;
  global?: boolean;
}

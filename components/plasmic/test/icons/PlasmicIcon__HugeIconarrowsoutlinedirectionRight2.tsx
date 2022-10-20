// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HugeIconarrowsoutlinedirectionRight2IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HugeIconarrowsoutlinedirectionRight2Icon(
  props: HugeIconarrowsoutlinedirectionRight2IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M18.667 9.333L13.333 16l5.334 6.667"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default HugeIconarrowsoutlinedirectionRight2Icon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3358IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3358Icon(props: Ellipse3358IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 64"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"32"} cy={"32"} r={"32"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse3358Icon;
/* prettier-ignore-end */

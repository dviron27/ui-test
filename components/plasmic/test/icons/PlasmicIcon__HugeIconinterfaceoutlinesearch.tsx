// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HugeIconinterfaceoutlinesearchIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HugeIconinterfaceoutlinesearchIcon(
  props: HugeIconinterfaceoutlinesearchIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g
        clipPath={"url(#Z_9_KRu_Ra)"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      >
        <path
          d={"M17.5 9.583a7.917 7.917 0 10-15.833 0 7.917 7.917 0 0015.833 0z"}
        ></path>

        <path d={"M15.417 15.417l2.916 2.916"} strokeLinecap={"round"}></path>
      </g>

      <defs>
        <clipPath id={"Z_9_KRu_Ra"}>
          <path fill={"currentColor"} d={"M0 0h20v20H0z"}></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default HugeIconinterfaceoutlinesearchIcon;
/* prettier-ignore-end */

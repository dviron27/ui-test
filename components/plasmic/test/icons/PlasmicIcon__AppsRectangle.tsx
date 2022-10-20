// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AppsRectangleIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AppsRectangleIcon(props: AppsRectangleIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 17"}
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

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M13.333 0A2.333 2.333 0 0011 2.333v2.334A2.333 2.333 0 0013.333 7h2.334A2.333 2.333 0 0018 4.667V2.333A2.333 2.333 0 0015.667 0h-2.334zm-11 10A2.333 2.333 0 000 12.333v2.334A2.333 2.333 0 002.333 17h2.334A2.333 2.333 0 007 14.667v-2.334A2.333 2.333 0 004.667 10H2.333zM0 2.333A2.333 2.333 0 012.333 0h2.334A2.333 2.333 0 017 2.333v2.334A2.333 2.333 0 014.667 7H2.333A2.333 2.333 0 010 4.667V2.333zM13.333 10A2.333 2.333 0 0011 12.333v2.334A2.333 2.333 0 0013.333 17h2.334A2.333 2.333 0 0018 14.667v-2.334A2.333 2.333 0 0015.667 10h-2.334z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AppsRectangleIcon;
/* prettier-ignore-end */

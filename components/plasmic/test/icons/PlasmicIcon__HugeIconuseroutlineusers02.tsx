// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HugeIconuseroutlineusers02IconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HugeIconuseroutlineusers02Icon(
  props: HugeIconuseroutlineusers02IconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
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

      <ellipse
        cx={"14"}
        cy={"19.25"}
        rx={"7"}
        ry={"2.917"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
      ></ellipse>

      <circle
        cx={"14"}
        cy={"9.333"}
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeLinejoin={"round"}
        r={"3.5"}
      ></circle>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.276 15.609c-1.337.078-2.557.33-3.513.711-.58.232-1.1.527-1.487.893-.388.368-.693.859-.693 1.454s.305 1.085.693 1.453c.387.366.907.66 1.487.893a9.683 9.683 0 001.821.51c-.463-.542-.766-1.136-.874-1.762a6.438 6.438 0 01-.39-.14c-.475-.191-.81-.399-1.013-.591-.202-.19-.224-.314-.224-.363 0-.05.022-.173.224-.364.203-.192.538-.4 1.013-.59.277-.11.59-.21.932-.296.45-.68 1.145-1.295 2.024-1.808zm16.014 4.152c-.108.626-.41 1.22-.874 1.762a9.683 9.683 0 001.82-.51c.58-.232 1.1-.527 1.488-.893.388-.368.693-.858.693-1.453 0-.595-.305-1.086-.693-1.454-.387-.366-.907-.66-1.487-.893-.956-.382-2.176-.633-3.513-.711.879.513 1.573 1.127 2.024 1.808.342.085.655.185.932.296.475.19.81.398 1.013.59.202.191.224.314.224.364 0 .05-.022.172-.224.363-.203.192-.538.4-1.013.59a6.45 6.45 0 01-.39.141zm-4.078-7.804a5.9 5.9 0 01-.852 1.252 3.083 3.083 0 101.157-5.776c.162.47.265.968.302 1.484h.014a1.583 1.583 0 11-.621 3.04zM8.483 7.433a3.083 3.083 0 101.157 5.776 5.848 5.848 0 01-.852-1.252 1.583 1.583 0 11-.607-3.04 5.83 5.83 0 01.302-1.484z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HugeIconuseroutlineusers02Icon;
/* prettier-ignore-end */

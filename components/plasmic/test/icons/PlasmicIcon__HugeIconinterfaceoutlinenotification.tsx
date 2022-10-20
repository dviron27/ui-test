// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HugeIconinterfaceoutlinenotificationIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HugeIconinterfaceoutlinenotificationIcon(
  props: HugeIconinterfaceoutlinenotificationIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
        d={
          "M4.455 13.88l-.571-.486.571.486zm.88-2.042l-.745-.084.745.085zm13.33 0l.745-.084-.745.085zm.88 2.042l.571-.486-.572.486zM18.32 8.794l-.745.084.745-.084zm-12.64 0l.745.084-.745-.084zm10.022 10.47a.75.75 0 10-1.404-.527l1.404.526zm-6-.527a.75.75 0 10-1.404.526l1.404-.526zm8.468-2.487H5.83v1.5h12.34v-1.5zm-.595-7.372l.345 3.045 1.49-.169-.344-3.044-1.49.168zM6.08 11.923l.345-3.045-1.49-.168-.345 3.044 1.49.169zm-1.053 2.443c.585-.688.95-1.54 1.053-2.443l-1.49-.169a3.067 3.067 0 01-.706 1.64l1.143.972zm12.893-2.443a4.568 4.568 0 001.053 2.443l1.143-.972a3.066 3.066 0 01-.706-1.64l-1.49.169zM5.83 16.25c-.887 0-1.45-1.122-.803-1.884l-1.143-.972c-1.42 1.67-.306 4.356 1.946 4.356v-1.5zm12.34 1.5c2.252 0 3.365-2.685 1.946-4.356l-1.143.972c.648.762.084 1.884-.803 1.884v1.5zm.896-9.04C18.65 5.045 15.628 2.25 12 2.25v1.5c2.83 0 5.242 2.187 5.575 5.128l1.49-.168zm-12.641.168C6.758 5.937 9.17 3.75 12 3.75v-1.5c-3.628 0-6.65 2.795-7.066 6.46l1.49.168zm7.873 9.859c-.323.86-1.213 1.513-2.298 1.513v1.5c1.685 0 3.152-1.017 3.702-2.487l-1.404-.526zM12 20.25c-1.085 0-1.975-.652-2.298-1.513l-1.404.526c.55 1.47 2.017 2.487 3.702 2.487v-1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HugeIconinterfaceoutlinenotificationIcon;
/* prettier-ignore-end */

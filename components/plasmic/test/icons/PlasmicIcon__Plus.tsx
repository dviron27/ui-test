// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlusIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlusIcon(props: PlusIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 11"}
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
          "M5.938.594a.594.594 0 10-1.188 0V4.75H.594a.594.594 0 100 1.188H4.75v4.156a.594.594 0 001.188 0V5.938h4.156a.594.594 0 000-1.188H5.938V.594z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PlusIcon;
/* prettier-ignore-end */

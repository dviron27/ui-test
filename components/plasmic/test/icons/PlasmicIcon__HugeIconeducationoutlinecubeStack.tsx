// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HugeIconeducationoutlinecubeStackIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function HugeIconeducationoutlinecubeStackIcon(
  props: HugeIconeducationoutlinecubeStackIconProps
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
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 5.833h.75a.75.75 0 00-1.085-.67l.335.67zm-.75 4.667a.75.75 0 001.5 0h-1.5zm-.752-4.754a.75.75 0 00.67 1.341l-.67-1.341zm.335 4.004a.75.75 0 000 1.5v-1.5zm2.334 1.5a.75.75 0 000-1.5v1.5zm-10.5 3.5h7v-1.5h-7v1.5zm8.583 1.583v7h1.5v-7h-1.5zm-1.583 8.584h-7v1.5h7v-1.5zm-8.584-1.584v-7h-1.5v7h1.5zm1.584 1.584a1.583 1.583 0 01-1.584-1.584h-1.5a3.083 3.083 0 003.084 3.084v-1.5zm8.583-1.584c0 .875-.709 1.584-1.583 1.584v1.5a3.083 3.083 0 003.083-3.084h-1.5zm-1.583-8.583c.874 0 1.583.709 1.583 1.583h1.5a3.083 3.083 0 00-3.083-3.083v1.5zm-7-1.5a3.083 3.083 0 00-3.084 3.083h1.5c0-.874.71-1.583 1.584-1.583v-1.5zm11.666 1.5h7v-1.5h-7v1.5zm8.584 1.583v7h1.5v-7h-1.5zm-1.584 8.584h-7v1.5h7v-1.5zm-7 0a1.583 1.583 0 01-1.583-1.584h-1.5a3.083 3.083 0 003.083 3.084v-1.5zm8.584-1.584c0 .875-.71 1.584-1.584 1.584v1.5a3.083 3.083 0 003.084-3.084h-1.5zm-1.584-8.583c.875 0 1.584.709 1.584 1.583h1.5a3.083 3.083 0 00-3.084-3.083v1.5zm-7-1.5a3.083 3.083 0 00-3.083 3.083h1.5c0-.874.709-1.583 1.583-1.583v-1.5zM10.5 3.083h7v-1.5h-7v1.5zm8.583 1.584v7h1.5v-7h-1.5zM17.5 13.25h-7v1.5h7v-1.5zm-8.583-1.583v-7h-1.5v7h1.5zM10.5 13.25a1.583 1.583 0 01-1.583-1.583h-1.5A3.083 3.083 0 0010.5 14.75v-1.5zm8.583-1.583c0 .874-.708 1.583-1.583 1.583v1.5a3.083 3.083 0 003.083-3.083h-1.5zM17.5 3.083c.875 0 1.583.71 1.583 1.584h1.5A3.083 3.083 0 0017.5 1.583v1.5zm-7-1.5a3.083 3.083 0 00-3.083 3.084h1.5c0-.875.709-1.584 1.583-1.584v-1.5zm2.75 4.25V10.5h1.5V5.833h-1.5zm.415-.67l-1.167.583.67 1.341 1.167-.583-.67-1.341zm-.832 6.087h2.334v-1.5h-2.334v1.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HugeIconeducationoutlinecubeStackIcon;
/* prettier-ignore-end */

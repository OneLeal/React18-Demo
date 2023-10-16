import React from "react";

type ButtonShapeType = "default" | "circle" | "round";
type ButtonSizeType = "small" | "middle" | "large";
type ButtonType =
  | "brand"
  | "default"
  | "primary"
  | "success"
  | "info"
  | "warning"
  | "error"
  | "dashed"
  | "link"
  | "text";

export type LoadingConfigType = { loading: boolean; delay: number };
export type TimerType = ReturnType<typeof setTimeout> | null;
export type ClickType = React.MouseEventHandler<
  HTMLButtonElement | HTMLAnchorElement
>;
export type EventType = React.MouseEvent<
  HTMLButtonElement | HTMLAnchorElement,
  MouseEvent
>;

type MergedHTMLAttributes = Omit<
  React.HTMLAttributes<HTMLElement> &
    React.ButtonHTMLAttributes<HTMLElement> &
    React.AnchorHTMLAttributes<HTMLElement>,
  "type"
>;

export interface ButtonProps extends MergedHTMLAttributes {
  type?: ButtonType;
  shape?: ButtonShapeType;
  size?: ButtonSizeType;
  children?: React.ReactNode;
  disabled?: boolean;
  block?: boolean;
  loading?: boolean | { delay?: number };
  icon?: string;
  prefixCls?: string;
  className?: string;
  rootClassName?: string;
  // [key: `data-${string}`]: string; // FIXME: consider to use in the future
}

import React, { HTMLAttributes } from "react";
import classNames from "classnames";
import "./style.scss";

interface IIconProps extends HTMLAttributes<HTMLElement> {
  icon: string;
  className?: string;
}

const MyIcon: React.FC<IIconProps> = ({ icon, className, style }) => {
  const cls = classNames("my-icon", className, { [icon]: !!icon });
  return <i className={cls} style={style} />;
};

export default MyIcon;

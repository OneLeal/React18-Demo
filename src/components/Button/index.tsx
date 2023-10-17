import React, { useEffect, useMemo, useState } from "react";
import MyIcon from "../Icon";
import classNames from "classnames";
import {
  ButtonProps,
  LoadingConfigType,
  TimerType,
  ClickType,
  EventType,
} from "./button";
import "./style.scss";

// 获取 loading 配置数据
function getLoadingConfig(loading: ButtonProps["loading"]): LoadingConfigType {
  if (typeof loading === "object" && loading) {
    const delay = loading?.delay;
    const isDelay = !Number.isNaN(delay) && typeof delay === "number";
    return { loading: false, delay: isDelay ? delay : 0 };
  }
  return { loading: !!loading, delay: 0 };
}

const MyButton: React.FC<ButtonProps> = ({
  size = "middle",
  type = "default",
  shape = "default",
  className = "",
  children,
  block,
  icon,
  disabled,
  loading,
  ...resetProps
}) => {
  // 获取 loading 配置参数
  const loadingOrDelay = useMemo<LoadingConfigType>(
    () => getLoadingConfig(loading),
    [loading]
  );

  // 组件内部的 loading 状态
  const [innerLoading, setLoading] = useState<boolean>(loadingOrDelay.loading);

  // 设置样式
  const cls = classNames(
    className,
    "my-btn",
    `my-btn-${type}`,
    `my-btn-size-${size}`,
    `my-btn-shape-${shape}`,
    {
      "my-btn-span": !!icon || innerLoading,
      "my-btn-only-icon": (!!icon || innerLoading) && !children,
      "my-btn-block": block,
      "my-btn-link-disabled": type === "link" && (disabled || innerLoading),
    }
  );

  // 处理点击事件
  const handleClick = (e: EventType) => {
    const { onClick } = resetProps;
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }
    (onClick as ClickType)?.(e);
  };

  // 渲染 Icon 图标
  const IconComponent = useMemo(
    () =>
      innerLoading ? (
        <MyIcon icon="icon-loading" />
      ) : icon ? (
        <MyIcon icon={icon} />
      ) : null,
    [icon, innerLoading]
  );

  // 初始化 or 设置组件内部的 loading 状态
  useEffect(() => {
    let delayTimer: TimerType = null;
    if (loadingOrDelay.delay > 0) {
      delayTimer = setTimeout(() => {
        delayTimer = null;
        setLoading(true);
      }, loadingOrDelay.delay);
    } else {
      setLoading(loadingOrDelay.loading);
    }

    function cleanupTimer() {
      if (delayTimer) {
        clearTimeout(delayTimer);
        delayTimer = null;
      }
    }

    return cleanupTimer;
  }, [loadingOrDelay]);

  // 返回 Link or Text
  if (type === "link") {
    return (
      <a
        className={cls}
        style={resetProps.style}
        href={resetProps.href || "#"}
        target={resetProps.target || "_blank"}
        onClick={handleClick}
      >
        {IconComponent}
        {children && <span>{children}</span>}
      </a>
    );
  }

  // 返回 Button
  return (
    <button
      className={cls}
      style={resetProps.style}
      disabled={disabled || innerLoading}
      onClick={handleClick}
    >
      {IconComponent}
      {children && <span>{children}</span>}
    </button>
  );
};

export default MyButton;

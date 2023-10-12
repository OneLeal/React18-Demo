import React, { useEffect, useMemo, useState } from "react";
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

// TODO: finish Icon & className
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
  underline,
  ...resetProps
}) => {
  // 设置样式
  const cls = classNames(
    className,
    "my-btn",
    `my-btn-${type}`,
    `my-btn-size-${size}`,
    `my-btn-shape-${shape}`,
    {
      "my-btn-block": block,
      "my-btn-link-disabled": disabled && type === "link",
      "my-btn-link-underline": underline && type === "link",
    }
  );

  // 获取 loading 配置参数
  const loadingOrDelay = useMemo<LoadingConfigType>(
    () => getLoadingConfig(loading),
    [loading]
  );

  // 组件内部的 loading 状态
  const [innerLoading, setLoading] = useState<boolean>(loadingOrDelay.loading);

  // 处理点击事件
  const handleClick = (e: EventType) => {
    const { onClick } = resetProps;
    if (innerLoading || disabled) {
      e.preventDefault();
      return;
    }
    (onClick as ClickType)?.(e);
  };

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
        target={resetProps.target || "_self"}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  // 返回 Button
  return (
    <button
      className={cls}
      style={resetProps.style}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default MyButton;

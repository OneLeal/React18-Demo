import React from "react";
import MyIcon from "../../components/Icon";
import "./style.scss";

const styleMap = {
  success: { color: "#409eff" },
  info: { color: "#909399" },
  error: { color: "#ff2c39" },
};

// 基础组件 Button 测试页面
const TestIcon: React.FC = () => {
  return (
    <>
      <h1>Icon 组件</h1>

      <div className="test-page-icon">
        <MyIcon icon="icon-refresh" />
        <MyIcon icon="icon-search" className="font-24 color-cyan" />
        <MyIcon icon="icon-plus" className="font-36 color-red" />
        <MyIcon icon="icon-loading" className="font-36 color-blue" />
        <MyIcon
          icon="icon-success"
          className="font-24"
          style={styleMap.success}
        />
        <MyIcon icon="icon-info" className="font-24" style={styleMap.info} />
        <MyIcon icon="icon-error" className="font-24" style={styleMap.error} />
      </div>
    </>
  );
};

export default TestIcon;

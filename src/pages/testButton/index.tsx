import React from "react";
import MyButton from "../../components/Button";

// 基础组件 Button 测试页面
const TestButton = () => {
  return (
    <>
      <h1>Test Button Component</h1>

      <div className="test-page test-page-button">
        <MyButton type="success">Primary</MyButton>

        <MyButton type="dashed" size="large">
          Dashed
        </MyButton>
      </div>
    </>
  );
};

export default TestButton;

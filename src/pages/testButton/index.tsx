import React from "react";
import MyButton from "../../components/Button";
import "./style.scss";

// 基础组件 Button 测试页面
const TestButton = () => {
  return (
    <>
      <h1>Test Button Component</h1>

      <div className="test-page test-page-button">
        {/* 基本使用 */}
        <div className="btn-group-wrap">
          <p>基本使用</p>

          <div className="btn-group-content">
            <MyButton type="primary">Primary</MyButton>
            <MyButton type="success">Success</MyButton>
            <MyButton type="info">Info</MyButton>
            <MyButton type="warning">Warning</MyButton>
            <MyButton type="error">Error</MyButton>
            <MyButton type="dashed">Dashed</MyButton>
            <MyButton>Default</MyButton>
          </div>

          <div className="btn-group-content">
            <MyButton disabled type="primary">
              Primary
            </MyButton>
            <MyButton disabled type="success">
              Success
            </MyButton>
            <MyButton disabled type="info">
              Info
            </MyButton>
            <MyButton disabled type="warning">
              Warning
            </MyButton>
            <MyButton disabled type="error">
              Error
            </MyButton>
            <MyButton disabled type="dashed">
              Dashed
            </MyButton>
            <MyButton disabled>Default</MyButton>
          </div>
        </div>

        {/* 尺寸 & 外形 */}
        <div className="btn-group-wrap">
          <p>尺寸 & 外形</p>

          <div className="btn-group-content btn-group-size">
            <MyButton size="small">Small</MyButton>
            <MyButton type="dashed">Middle</MyButton>
            <MyButton type="primary" size="large">
              Large
            </MyButton>
            <MyButton type="primary" size="large" disabled>
              Large
            </MyButton>

            <div style={{ marginRight: "20px" }} />

            <MyButton size="small" shape="round">
              Small
            </MyButton>
            <MyButton type="dashed" shape="round">
              Middle
            </MyButton>
            <MyButton type="primary" size="large" shape="round">
              Large
            </MyButton>
            <MyButton type="primary" size="large" shape="round" disabled>
              Large
            </MyButton>

            <div style={{ marginRight: "20px" }} />

            <MyButton size="small" shape="circle">
              S
            </MyButton>
            <MyButton type="dashed" shape="circle">
              H
            </MyButton>
            <MyButton type="primary" size="large" shape="circle">
              E
            </MyButton>
            <MyButton type="primary" size="large" shape="circle" disabled>
              E
            </MyButton>
          </div>
        </div>

        {/* 文字 & 链接 */}
        <div className="btn-group-wrap">
          <p>文字 & 链接</p>

          <div className="btn-group-content">
            <MyButton type="text">Hello</MyButton>
            <MyButton type="text" shape="round">
              World
            </MyButton>
            <MyButton type="text" shape="circle">
              Hi
            </MyButton>
            <MyButton disabled type="text">
              Disabled
            </MyButton>

            <MyButton type="link" href="https://juejin.cn/" target="_blank">
              JueJin
            </MyButton>
            <MyButton
              disabled
              type="link"
              href="https://juejin.cn/"
              target="_blank"
            >
              JueJin
            </MyButton>

            <MyButton type="link" href="https://www.bilibili.com/" underline>
              Bilibili
            </MyButton>
            <MyButton
              disabled
              type="link"
              href="https://www.bilibili.com/"
              underline
            >
              Bilibili
            </MyButton>
          </div>
        </div>

        {/* Block 按钮 */}
        <div className="btn-group-wrap">
          <p>Block 按钮</p>

          <div className="btn-group-block">
            <div className="btn-group-content">
              <MyButton type="primary" block>
                Primary Block
              </MyButton>
              <MyButton block>Default Block</MyButton>
              <MyButton type="dashed" block>
                Dashed Block
              </MyButton>
              <MyButton type="text" block>
                Text Block
              </MyButton>
              <MyButton type="link" block>
                Link Block
              </MyButton>
            </div>

            <div className="btn-group-content">
              <MyButton type="primary" shape="round" size="large" block>
                Large Block
              </MyButton>
              <MyButton
                type="primary"
                shape="round"
                size="large"
                block
                disabled
              >
                Large Block
              </MyButton>
              <MyButton type="dashed" shape="round" block>
                Middle Block
              </MyButton>
              <MyButton shape="round" block>
                Middle Block
              </MyButton>
              <MyButton type="text" shape="round" size="small" block>
                Small Block
              </MyButton>
            </div>
          </div>
        </div>

        {/* TODO: Icon & Loading 效果 */}
        <div className="btn-group-wrap"></div>

        {/* TODO: Custom Style */}
        <div className="btn-group-wrap"></div>
      </div>
    </>
  );
};

export default TestButton;

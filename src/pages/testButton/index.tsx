import React, { useState } from "react";
import MyButton from "../../components/Button";
import "./style.scss";

// 基础组件 Button 测试页面
const TestButton = () => {
  const [isLock, setIsLock] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [waiting, setWaiting] = useState<boolean>(false);

  return (
    <>
      <h1>Test Button Component</h1>

      <div className="test-page test-page-button">
        {/* 基本使用 */}
        <div className="btn-group-wrap">
          <p>Base Usage</p>

          <div className="btn-group-content">
            <MyButton type="brand">Brand</MyButton>
            <MyButton type="primary">Primary</MyButton>
            <MyButton type="success">Success</MyButton>
            <MyButton type="info">Info</MyButton>
            <MyButton type="warning">Warning</MyButton>
            <MyButton type="error">Error</MyButton>
            <MyButton type="dashed">Dashed</MyButton>
            <MyButton>Default</MyButton>
          </div>

          <div className="btn-group-content">
            <MyButton disabled type="brand">
              Brand
            </MyButton>
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
          <p>Size & Shape</p>

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
              SHE
            </MyButton>
          </div>
        </div>

        {/* 文字 & 链接 */}
        <div className="btn-group-wrap">
          <p>Text & Link</p>

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

            <MyButton type="link" href="https://juejin.cn/">
              JueJin
            </MyButton>
            <MyButton
              disabled
              type="link"
              href="https://juejin.cn/"
              target="_self"
            >
              JueJin
            </MyButton>
          </div>
        </div>

        {/* Block 按钮 */}
        <div className="btn-group-wrap">
          <p>Block Button</p>

          <div className="btn-group-block">
            <div className="btn-group-content">
              <MyButton type="primary" block>
                Primary Block
              </MyButton>
              <MyButton type="primary" disabled block>
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
          </div>
        </div>

        <div className="btn-group-wrap">
          <p>Icon Button</p>

          <div className="btn-group-icon">
            <div className="btn-group-content">
              <MyButton
                size="small"
                icon="icon-search"
                onClick={() => {
                  console.log("search...");
                }}
              >
                Search
              </MyButton>

              <MyButton
                type="dashed"
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              >
                Plus
              </MyButton>

              <MyButton
                size="large"
                type="primary"
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              >
                Refresh
              </MyButton>

              <MyButton
                size="large"
                type="primary"
                icon="icon-refresh"
                disabled
                onClick={() => {
                  console.log("refresh...");
                }}
              >
                Refresh
              </MyButton>
            </div>
          </div>

          <div className="btn-group-icon">
            <div className="btn-group-content">
              <MyButton
                size="small"
                icon="icon-search"
                shape="round"
                onClick={() => {
                  console.log("search...");
                }}
              >
                Search
              </MyButton>

              <MyButton
                type="dashed"
                shape="round"
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              >
                Plus
              </MyButton>

              <MyButton
                size="large"
                type="primary"
                shape="round"
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              >
                Refresh
              </MyButton>

              <MyButton
                size="large"
                type="primary"
                shape="round"
                disabled
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              >
                Refresh
              </MyButton>
            </div>
          </div>

          <div className="btn-group-icon">
            <div className="btn-group-content">
              <MyButton
                size="small"
                icon="icon-search"
                shape="default"
                onClick={() => {
                  console.log("search...");
                }}
              />

              <MyButton
                type="dashed"
                size="small"
                icon="icon-search"
                shape="default"
                onClick={() => {
                  console.log("search...");
                }}
              />

              <MyButton
                type="dashed"
                shape="default"
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              />

              <MyButton
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              />

              <MyButton
                size="large"
                icon="icon-view"
                onClick={() => {
                  console.log("view...");
                }}
              />

              <MyButton
                size="large"
                disabled
                icon="icon-view"
                onClick={() => {
                  console.log("view...");
                }}
              />

              <MyButton
                size="large"
                type="primary"
                shape="default"
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              />

              <MyButton
                size="large"
                type="primary"
                shape="default"
                disabled
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              />

              <MyButton
                size="small"
                icon="icon-search"
                shape="circle"
                onClick={() => {
                  console.log("search...");
                }}
              />

              <MyButton
                type="dashed"
                size="small"
                icon="icon-search"
                shape="circle"
                onClick={() => {
                  console.log("search...");
                }}
              />

              <MyButton
                type="dashed"
                shape="circle"
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              />

              <MyButton
                shape="circle"
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              />

              <MyButton
                size="large"
                shape="circle"
                icon="icon-view"
                onClick={() => {
                  console.log("view...");
                }}
              />

              <MyButton
                disabled
                size="large"
                shape="circle"
                icon="icon-view"
                onClick={() => {
                  console.log("view...");
                }}
              />

              <MyButton
                size="large"
                type="primary"
                shape="circle"
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              />

              <MyButton
                size="large"
                type="primary"
                shape="circle"
                disabled
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              />
            </div>
          </div>

          <div className="btn-group-icon">
            <div className="btn-group-content">
              <MyButton
                type="link"
                icon="icon-search"
                onClick={() => {
                  console.log("search...");
                }}
              >
                Search
              </MyButton>

              <MyButton
                type="text"
                size="small"
                icon="icon-search"
                onClick={() => {
                  console.log("search...");
                }}
              >
                Search
              </MyButton>

              <MyButton
                type="text"
                size="middle"
                icon="icon-plus"
                onClick={() => {
                  console.log("plus...");
                }}
              >
                Plus
              </MyButton>

              <MyButton
                type="text"
                size="large"
                icon="icon-refresh"
                onClick={() => {
                  console.log("refresh...");
                }}
              >
                Refresh
              </MyButton>
            </div>
          </div>
        </div>

        <div className="btn-group-wrap">
          <p>Loading State</p>

          <div className="btn-group-loading btn-group-content">
            <MyButton loading>Loading...</MyButton>
            <MyButton type="primary" size="large" loading>
              Loading...
            </MyButton>

            <MyButton shape="round" loading>
              Loading...
            </MyButton>
            <MyButton type="primary" size="large" shape="round" loading>
              Loading...
            </MyButton>

            <MyButton shape="circle" loading />
            <MyButton type="primary" size="large" shape="circle" loading />

            <MyButton type="text" loading>
              Loading...
            </MyButton>
            <MyButton type="link" loading>
              Loading...
            </MyButton>
          </div>
        </div>

        <div className="btn-group-wrap">
          <p>Custom CSS & Operation</p>

          <div className="btn-group-custom btn-group-content">
            <MyButton
              icon={isLock ? "icon-lock" : "icon-unlock"}
              type={isLock ? "error" : "default"}
              loading={loading}
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  setLoading(false);
                  setIsLock(!isLock);
                }, 1500);
              }}
            >
              {isLock ? "Lock" : "Unlock"}
            </MyButton>

            <MyButton
              className="btn-other-theme"
              type="info"
              icon="icon-view"
              loading={waiting}
              style={{ height: "45px", padding: "6px 22px" }}
              onClick={() => {
                setWaiting(true);
                setTimeout(() => {
                  setWaiting(false);
                }, 1500);
              }}
            >
              Check View
            </MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestButton;

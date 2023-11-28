import { EditorView, ViewUpdate } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
import { xcodeDark } from "@uiw/codemirror-theme-xcode";
import { basicSetup } from "codemirror";
import React, { useEffect, useRef } from "react";
import { doc } from "./text";
import { IDivideLineOption } from "../../type";
import { divideLinePlugin, customStylePlugin } from "./plugins";
import "./style.scss";

// 预置代码与沟槽之间的 3 种分隔线
const divideOption: IDivideLineOption = {
  red: [1, 8],
  blue: [4, 5, 10, 11],
  yellow: [13, 14],
};

// 草案编写页面
const TestCodemirror = () => {
  const editorContainor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 添加监听器，监听编辑器变化
    const updateWatcher = EditorView.updateListener.of((update: ViewUpdate) => {
      console.log("codemirror has update!");
    });

    // 编辑器 state 配置项
    const config = {
      doc,
      extensions: [
        xcodeDark,
        basicSetup,
        updateWatcher,
        customStylePlugin,
        divideLinePlugin(divideOption),
      ],
    };

    // 编辑器实例化
    const editor = new EditorView({
      parent: editorContainor.current as HTMLDivElement,
      state: EditorState.create(config),
    });
    setEditorSelection(editor);

    // 销户编辑器
    return () => {
      editor.destroy();
    };
  }, []);

  // 设置编辑器光标位置
  const setEditorSelection = (view: EditorView) => {
    view.focus(); // 自动聚焦
    const lines = view.state.doc.lines; // 获取当前打开文件的总行数
    const lastLine = view.state.doc.line(lines); // 获取最后一行的行数据

    view.dispatch({
      selection: { anchor: lastLine.to, head: lastLine.to }, // 设置光标位置
      effects: [
        EditorView.scrollIntoView(lastLine.from, {
          y: "center",
        }), // 编辑器滚动，光标居中显示
      ],
    });
  };

  return <div ref={editorContainor} className="editor-containor" />;
};

export default TestCodemirror;

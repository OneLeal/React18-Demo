// 参考: https://codemirror.net/examples/gutter/
import { BlockInfo, EditorView, GutterMarker, gutter } from "@codemirror/view";
import { IDivideLineOption } from "../../../type";

class DivideMarker extends GutterMarker {
  toDOM() {
    return document.createTextNode("");
  }
}

const divideMarkerBlue = new DivideMarker();
const divideMarkerYellow = new DivideMarker();
const divideMarkerRed = new DivideMarker();

divideMarkerBlue.elementClass = "cm-divide-gutter-blue";
divideMarkerYellow.elementClass = "cm-divide-gutter-yellow";
divideMarkerRed.elementClass = "cm-divide-gutter-red";

const lineMarker = (
  view: EditorView,
  line: BlockInfo,
  otherMarkers: readonly GutterMarker[],
  option: IDivideLineOption
) => {
  const { blue, yellow, red } = option;
  const { from } = line;
  const doc = view.state.doc;
  const isBlue = (blue || []).map((num) => doc.line(num).from);
  const isYellow = (yellow || []).map((num) => doc.line(num).from);
  const isRed = (red || []).map((num) => doc.line(num).from);

  if (isBlue.includes(from)) {
    return divideMarkerBlue;
  } else if (isYellow.includes(from)) {
    return divideMarkerYellow;
  } else if (isRed.includes(from)) {
    return divideMarkerRed;
  } else return null;
};

export const divideLinePlugin = (option: IDivideLineOption) =>
  gutter({
    class: "cm-divide-gutter",
    lineMarker: (view, line, otherMarkers) =>
      lineMarker(view, line, otherMarkers, option),
  });

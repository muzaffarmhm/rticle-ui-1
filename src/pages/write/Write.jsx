import React from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";

export default class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null) };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    return (
      //Add some margin left to show plugins sidebar
      <div style={{ marginLeft: 80 }}>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Add some text"
        />
      </div>
    );
  }
}

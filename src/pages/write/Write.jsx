
import React from "react";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";
import Navbar from "../../components/Navbar";
import WriteDetails from "../../components/ArticleWrite/WriteDetails";
import FormButton from "../../components/FormButton";

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
      <div>
        <Navbar />
        <WriteDetails />
        <div style={{ marginLeft: 80 }}>
          <MegadraftEditor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Add some text"
          />
        </div>
        <FormButton value="Preview on Click" />
      </div>
    );
  }
}

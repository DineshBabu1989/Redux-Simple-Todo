import React from "react";
import { connect } from "react-redux";
import { testAction } from "../actions/actions";

// use of dispatch in a functional component

const TestInput = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input type="text" ref={node => (input = node)} />
      <button
        onClick={e => {
          dispatch(testAction(input.value));
          input.value = "";
        }}
      >
        Add
      </button>
    </div>
  );
};
export default connect()(TestInput);

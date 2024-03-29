import React from "react";
import Tree from "react-d3-tree";
//Static JSON you can always use json from a different file
const myTreeData = [
  {
    name: "Top Level",
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C"
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C"
        }
      },
      {
        name: "Level 2: B"
      }
    ]
  }
];
export default class MyTree extends React.Component {
  render() {
    return (
      <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
        //Calling the actual library with json as a prop
        <Tree data={myTreeData} />
      </div>
    );
  }
}

// import React, { Component } from "react";
// import List from "./component/List";
// import "./App.css";

// class App extends Component {
//   state = {
//     tasks: [
//       { NewText: "lorem " },
//       { NewText: "lorem " },
//       { NewText: "lorem " },
//       { NewText: "lorem " }
//     ]
//   };

//   delete = event => {
//     const newTasks = [...this.state.tasks];
//     newTasks.splice(event, 1);
//     this.setState({
//       tasks: newTasks
//     });
//   };
//   render() {
//     return (
//       <div>
//         <ul className="task">
//           {this.state.tasks.map((el, i) => {
//             return (
//               <List NewText={el.NewText} delete={el.delete.bind(this, event)} />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// export default App;
import React from "react";
// import List from "./component/List";
import "./App.css";

class App extends React.Component {
  state = {
    tasks: [],
    text: "",
    isEmpty: false
  };

  changeText = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  add = event => {
    event.preventDefault();

    return this.state.text === ""
      ? alert("error")
      : //  this.setState({ isEmpty: true })
        this.setState({
          tasks: [
            ...this.state.tasks,
            { newText: this.state.text, togler: false }
          ],
          text: "",
          isEmpty: false //msg d'erreur
        });
  };

  // task = event => {
  //   this.onclick({
  //     id: shortid.generate(),
  //     text: this.state.text
  //   });
  //click
  // };
  // add = tasks => {
  //   const newTasks = [...this.state.tasks];
  //   this.setState({
  //     text: this.state.text,
  //     text: "",
  //     tasks: newTasks
  //   });
  // };
  complete = event => {
    this.setState({
      tasks: this.state.tasks.map((el, i) =>
        i === event ? { ...el, togler: !el.togler } : el
      )
    });
  };
  delete = event => {
    let id = event.target.id;
    this.state.tasks.splice(id, 1);
    this.setState({ tasks: this.state.tasks });
  };
  render() {
    return (
      <div>
        <header>
          <div className="nav-bar">
            <div className="nav">
              <h1>To-DO App!</h1>
              <label className="sub-title" for="sub-title">
                Add New To-Do
              </label>
              <input
                name="text"
                value={this.state.text}
                onChange={this.changeText}
                className="place-holder"
                type="text"
                placeholder="Enter New Task"
              />
            </div>
            <div className="add-section">
              <button onClick={this.add} className="btn-add">
                Add
              </button>
            </div>
          </div>
        </header>
        <div className="tasks-done">
          <h2>Let's get some work done!</h2>
          <div>
            <ul className="task">
              {this.state.tasks.map((el, i) => (
                <li className="tasks" key={i}>
                  <button className="delete " id={i} onClick={this.delete}>
                    Delete
                  </button>
                  <button className="complete" onClick={() => this.complete(i)}>
                    {" "}
                    {!el.togler ? "Complete" : "Undo"}{" "}
                  </button>
                  <span
                    style={{
                      textDecoration: el.togler ? "line-through" : "none"
                    }}
                  >
                    {el.newText}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <span className="Error-msg">
            {this.state.isEmpty === true ? "Error" : null}
          </span>
        </div>
      </div>
    );
  }
}
export default App;

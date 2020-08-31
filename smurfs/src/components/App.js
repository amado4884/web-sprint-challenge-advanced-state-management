import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { fetchSmurf } from "../actions";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Form from "./Form";

const SmurfList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 80rem;
  margin: auto;
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Form />
            <SmurfList>
              {this.props.list.map((sm) => (
                <Smurf key={Date.now()} smurf={sm} />
              ))}
            </SmurfList>
          </Route>
          <Route path="smurfs/:id">
            <Smurf smurf={this.props.list.filter((sm) => sm.id === match.params.id)[0]} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return { list: state.list };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchSmurfs: () => dispatch(fetchSmurf()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

const Home = ({ push }) => (
  <div>
    <h1>Home page</h1>
    <button onClick={() => push('/about')}>To about page</button>
  </div>
);

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
  push
};

const enhancer = connect(mapStateToProps, mapDispatchToProps);

export default enhancer(Home);
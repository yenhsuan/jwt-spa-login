import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from '../../actions/TestAction';


class TestPage extends PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {

  }

  clickHandler() {
    const { test, testData } = this.props;
    test(testData);
  }

  render() {
    const { testData } = this.props;
    return (
      <div>
        {testData}
        <button
          type="button"
          onClick={this.clickHandler}
        >
          clickMe;
        </button>
      </div>
    );
  }
}

TestPage.propTypes = {
  testData: PropTypes.number.isRequired,
  test: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  testData: state.dataModel.test.payload,
});

const mapDispatchToProps = dispatch => ({
  test: bindActionCreators(testAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction, getDog } from '../../actions/TestAction';

class TestPage extends PureComponent {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {

  }

  clickHandler() {
    const { test, testData, dog } = this.props;
    test(testData);
    dog();
  }

  render() {
    const { testData, url } = this.props;
    return (
      <div>
        {testData}
        <button
          type="button"
          onClick={this.clickHandler}
        >
          clickMe
        </button>
        {url}
      </div>
    );
  }
}

TestPage.propTypes = {
  testData: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  test: PropTypes.func.isRequired,
  dog: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  testData: state.dataModel.test.payload,
  url: state.dataModel.test.dogUrl,
});

const mapDispatchToProps = dispatch => ({
  test: bindActionCreators(testAction, dispatch),
  dog: bindActionCreators(getDog, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);

import React from "react";
import SummaryTotal from "../SummaryTotal/SummaryTotal";

class MainSummary extends React.Component {
  render() {
    const { summary } = this.props;
    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <SummaryTotal total={this.props.total} />
      </section>
    );
  }
}

export default MainSummary;

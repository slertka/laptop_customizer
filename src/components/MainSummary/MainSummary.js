import React from "react";
import SummaryTotal from "../SummaryTotal/SummaryTotal";
import SummaryCost from "../SummaryCost/SummaryCost";

class MainSummary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map(key => (
      <div className="summary__option" key={key}>
        <div className="summary__option__label">{key} </div>
        <div className="summary__option__value">
          {this.props.selected[key].name}
        </div>
        <SummaryCost selected={this.props.selected[key]} />
      </div>
    ));

    return (
      <section className="main__summary">
        <h3>NEW GREENLEAF 2018</h3>
        {summary}
        <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default MainSummary;

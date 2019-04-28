import React from "react";

class SummaryCost extends React.Component {
  render() {
    return (
      <div className="summary__option__cost">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(this.props.selected.cost)}
      </div>
    );
  }
}

export default SummaryCost;

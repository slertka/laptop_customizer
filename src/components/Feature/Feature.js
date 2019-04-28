import React from "react";

class Feature extends React.Component {
  static defaultProps = {
    feature: "",
    selected: {},
    features: []
  };

  render() {
    const feature = this.props.type;
    const items = this.props.feature.map((item, index) => {
      const selectedClass =
        item.name === this.props.selected[feature].name
          ? "feature__selected"
          : "";
      const featureClass = "feature__option " + selectedClass;
      return (
        <li key={index} className="feature__item">
          <div
            className={featureClass}
            onClick={e => this.props.handleFeatureUpdate(feature, item)}
          >
            {item.name}(
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(item.cost)}
            )
          </div>
        </li>
      );
    });

    return (
      <div className="feature" key={feature}>
        <div className="feature__name">{feature}</div>
        <ul className="feature__list">{items}</ul>
      </div>
    );
  }
}

export default Feature;

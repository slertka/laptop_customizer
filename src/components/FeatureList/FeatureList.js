import React from "react";
import Feature from "../Feature/Feature";

class FeatureList extends React.Component {
  static defaultProps = {
    features: [],
    selected: []
  };

  render() {
    const features = Object.keys(this.props.features).map(key => {
      return (
        <Feature
          type={key}
          selected={this.props.selected}
          feature={this.props.features[key]}
          handleFeatureUpdate={(feature, newValue) =>
            this.props.handleFeatureUpdate(feature, newValue)
          }
        />
      );
    });

    return (
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {features}
      </section>
    );
  }
}

export default FeatureList;

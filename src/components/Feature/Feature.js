import React from "react";

class Feature extends React.Component {
  static defaultProps = {
    features: []
  };

  render() {
    console.log(this.props.features);
    // const features = this.props.features.map(feature => {
    //   return (
    //     <div className="feature" key={feature.name}>
    //       <div className="feature__name">{feature.name}</div>
    //       <ul className="feature__list" />
    //     </div>
    //   );
    // });
    this.props.features.forEach(feature => {
      return <div className="feature" key={feature.name} />;
    });

    return <div />;
  }
}

export default Feature;

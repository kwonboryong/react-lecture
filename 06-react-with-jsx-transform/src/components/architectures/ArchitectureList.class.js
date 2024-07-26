import React from 'https://esm.sh/react';

class ArchitectureList extends React.Component {
  render() {
    // props 객체
    const { lang, children } = this.props;

    return React.createElement(
      'ul',
      { className: 'architectures', lang },
      children
    );
  }
}

export default ArchitectureList;
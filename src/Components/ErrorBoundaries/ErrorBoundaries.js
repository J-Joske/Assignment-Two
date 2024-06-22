import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oops, something went wrong.</h1>
          <p>
            Contact Jarrod and let them know you got this message.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
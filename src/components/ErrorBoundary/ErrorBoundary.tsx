import { Component, ReactNode } from 'react';

type ErrorBoundaryProps = {
  readonly children: ReactNode;
  readonly renderError: (error?: Error) => ReactNode;
};

type ErrorBoundaryState = {
  error?: Error;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public readonly state: ErrorBoundaryState = {};

  public componentDidCatch(error: Error) {
    this.setState({ error });
  }

  public render() {
    const { error } = this.state;
    const { children, renderError } = this.props;

    return error ? renderError(error) : children;
  }
}

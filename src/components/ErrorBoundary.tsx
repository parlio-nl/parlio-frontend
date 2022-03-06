import { Component, ComponentProps, ErrorInfo } from "react";
import Toast from "./Toast";

type ErrorState = {
  hasError: boolean;
  message?: string;
};

export default class ErrorBoundary extends Component {
  constructor(props: ComponentProps<any>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log({ error, errorInfo });
  }

  render() {
    const { hasError, message } = this.state as ErrorState;
    if (hasError) {
      return <Toast message={`Er ging iets fout aan onze kant: ${message}`} />;
    }
    return this.props.children;
  }
}

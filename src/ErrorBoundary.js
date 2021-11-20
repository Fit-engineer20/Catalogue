import React from "react";

export class ErrorBoundary extends React.Component {
    
    state = { hasError: false, error: null };
    
  
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error,errorInfo);
    }
  
    render() {
         
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return( <div className="d-flex w-100 justify-content-center mt-5">
                  <h1>Something went wrong.</h1>
                </div>
        );
      }
  
      return this.props.children; 
    }
  }
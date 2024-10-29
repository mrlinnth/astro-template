function ReactContainer({ children }) {
  return (
    <div className="mockup-window border-gray-300 border">
      <div className="border-gray-300 border-t px-4 py-16 grid gap-4">
        <p>This window is inside react container component</p>
        <div className="divider"></div>
        {children}
      </div>
    </div>
  );
}

export default ReactContainer;

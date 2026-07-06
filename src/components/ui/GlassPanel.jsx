const GlassPanel = ({ children, className = "" }) => {
  return (
    <div className={`glass-panel rounded-2xl overflow-hidden border border-outline/30 shadow-2xl ${className}`}>
      {children}
    </div>
  );
};

export default GlassPanel;
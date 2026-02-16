export const LayoutCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        width: "420px",
        padding: "40px",
        borderRadius: "20px",
        backgroundColor: "var(--color-surface)",
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "25px",
        transition: "all 0.3s ease",
        opacity:0,
        transform: "translateY(40px)",
        animation: "fadeInUp 0.8s forwards",
      }}
    >
      {children}
    </div>
  );
};

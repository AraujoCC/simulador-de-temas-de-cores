export const Button = ({ children = "Abrir conta" }: { children?: string }) => {
  return (
    <button className="btn" type="button">
      <span className="btn__shine" />
      <span className="btn__text">{children}</span>
    </button>
  );
};

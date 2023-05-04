import { PropsWithChildren } from "react";
import variables from "../styles/variables.module.scss";

const CardWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: variables.white,
        borderRadius: "20px",
        boxShadow: "0px 3px 20px 6px rgba(0, 0, 0, 0.02)",
        paddingLeft: "120px",
        paddingRight: "120px",
        marginRight: "28px",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;

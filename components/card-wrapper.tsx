import { PropsWithChildren } from "react";
import variables from "../styles/variables.module.scss";
import { CARDTYPES } from "@/constants/enums";

type Props = {
  cardType?: CARDTYPES;
};

const CardWrapper: React.FC<PropsWithChildren & Props> = ({
  children,
  cardType = CARDTYPES.FINANCE,
}: PropsWithChildren & Props) => {
  return (
    <div
      style={{
        backgroundColor: variables.white,
        borderRadius: "20px",
        boxShadow: "0px 3px 20px 6px rgba(0, 0, 0, 0.02)",
        paddingLeft: "3.5rem",
        paddingRight: "3.5rem",
        // maxWidth: "fit-content",
        marginRight: CARDTYPES.FINANCE && "11px",
        width: cardType === CARDTYPES.FINANCE ? "80%" : "30%",
      }}
    >
      {children}
    </div>
  );
};

export default CardWrapper;

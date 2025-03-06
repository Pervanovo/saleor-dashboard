import { Text } from "@saleor/macaw-ui-next";
import React from "react";

interface RequiredFieldLabelProps {
  required?: boolean;
}

const RequiredFieldLabel: React.FC<RequiredFieldLabelProps> = ({ required }) => {
  return required !== false ? (
    <Text color={"critical2"} title={"Required field"} style={{ cursor: "help" }}>
      *
    </Text>
  ) : null;
};

export default RequiredFieldLabel;

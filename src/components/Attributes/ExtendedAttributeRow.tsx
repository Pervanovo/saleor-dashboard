import RequiredFieldLabel from "@dashboard/components/Attributes/RequiredFieldLabel";
import { Box, Button, Text } from "@saleor/macaw-ui-next";
import React from "react";

interface ExtendedAttributeRowProps {
  label: string;
  selectLabel: string;
  disabled: boolean;
  onSelect: () => void;
  required?: boolean;
}

const ExtendedAttributeRow: React.FC<ExtendedAttributeRowProps> = props => {
  const { label, selectLabel, disabled, onSelect, required, children } = props;

  return (
    <>
      <Box
        as="li"
        alignItems="center"
        paddingY={2}
        display="grid"
        gridTemplateColumns={2}
        __gridTemplateColumns="1fr 2fr"
        gap={5}
      >
        <Text data-test-id="attribute-label">{label}</Text>
        <RequiredFieldLabel required={required ?? false} />
        <Button
          disabled={disabled}
          variant="secondary"
          data-test-id="button-attribute-selector"
          onClick={onSelect}
          style={{
            maxWidth: "fit-content",
          }}
          type="button"
          justifySelf="end"
        >
          {selectLabel}
        </Button>
      </Box>
      <Box
        as="li"
        alignItems="center"
        paddingY={2}
        display="grid"
        gridTemplateColumns={2}
        __gridTemplateColumns="1fr 2fr"
        gap={5}
      >
        <Box />
        <Box data-test-id="attribute-value">{children}</Box>
      </Box>
    </>
  );
};

ExtendedAttributeRow.displayName = "ExtendedAttributeRow";
export default ExtendedAttributeRow;

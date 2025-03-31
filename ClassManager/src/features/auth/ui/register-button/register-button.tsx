import React from "react";
import { Button } from "src/shared/ui/button/button";
import { BUTTON_REGISTER } from "../../constants";
import { styles } from "./styles";

interface RegisterButtonProps {
  onPress: () => void;
}

export const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress }) => {
  return (
    <Button
      title={BUTTON_REGISTER.TITLE_BUTTON}
      onPress={onPress}
      style={styles.customButton}
      textStyle={styles.customButtonText}
    />
  );
};


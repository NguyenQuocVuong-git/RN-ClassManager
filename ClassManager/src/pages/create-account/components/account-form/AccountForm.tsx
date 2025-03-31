import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { Button } from "src/shared/ui/button/button";
import TextInputCustom from "src/shared/ui/text-input/text-input";
import { CREATE_ACCOUNT_LABEL, CREATE_ACCOUNT_SCREEN } from "../../constants";
import { styles } from "./styles";
import Or from "../or/or";

const AccountForm: React.FC = () => {
  const { control, handleSubmit } = useForm();

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.NAME}
            value={value}
            setValue={onChange}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.EMAIL}
            value={value}
            setValue={onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInputCustom
            label={CREATE_ACCOUNT_LABEL.PASSWORD}
            value={value}
            setValue={onChange}
          />
        )}
      />
      <Button
        title={CREATE_ACCOUNT_SCREEN.BUTTON_CREATE}
        onPress={handleSubmit((data) => console.log(data))}
        style={styles.button}
      />
      <Or />
    </View>
  );
};

export default AccountForm;

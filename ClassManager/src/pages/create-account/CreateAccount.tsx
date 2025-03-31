import React from "react";
import { Image, Text, View } from "react-native";
import AccountForm from "./components/account-form/AccountForm";
import { CREATE_ACCOUNT_SCREEN } from "./constants";
import { styles } from "./styles";

const CreateAccount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/header-img.png")}
        style={styles.headerImage}
      />
      <View style={styles.titleScreen}>
        <View style={styles.titleBlock}>
          <Image
            source={require("./assets/chevron-left.png")}
            style={styles.chevronLeft}
          />
          <Text style={styles.title}>
            {CREATE_ACCOUNT_SCREEN.CREATE_ACCOUNT}
          </Text>
        </View>

        <View style={styles.formRegisterWrapper}>
          <Text style={styles.hello}>{CREATE_ACCOUNT_SCREEN.HELLO}</Text>
          <Text style={styles.subHello}>{CREATE_ACCOUNT_SCREEN.SUB_HELLO}</Text>
          <AccountForm />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

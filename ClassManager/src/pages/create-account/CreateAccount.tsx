import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AccountForm from "./components/account-form/AccountForm";
import { CREATE_ACCOUNT_SCREEN } from "./constants";
import { styles } from "./styles";
import Or from "./components/or/or";
import LoginSocial from "./components/login-social/LoginSocial";
import { LoginLink } from "src/features/auth/ui/login-link/login-link";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "src/shared/type/type";
import { StackNavigationProp } from "@react-navigation/stack";
import { SCREEN } from "src/shared/constants/screen";

const CreateAccount: React.FC = () => {
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBackToBeginScreen = () => {
    navigate.navigate(SCREEN.BEGIN);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/header-img.png")}
        style={styles.headerImage}
      />
      <View style={styles.titleScreen}>
        <View style={styles.titleBlock}>
          <TouchableOpacity onPress={handleBackToBeginScreen}>
            <Image
              source={require("./assets/chevron-left.png")}
              style={styles.chevronLeft}
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            {CREATE_ACCOUNT_SCREEN.CREATE_ACCOUNT}
          </Text>
        </View>

        <View style={styles.formRegisterWrapper}>
          <Text style={styles.hello}>{CREATE_ACCOUNT_SCREEN.HELLO}</Text>
          <Text style={styles.subHello}>{CREATE_ACCOUNT_SCREEN.SUB_HELLO}</Text>
          <AccountForm />
          <Or />
          <LoginSocial />
          <LoginLink onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;

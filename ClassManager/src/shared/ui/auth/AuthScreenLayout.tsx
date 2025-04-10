import React from "react";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { LoginLink } from "src/features/auth/ui/login-link/login-link";
import { styles } from "./styles";
import Or from "./components/or/or";
import LoginSocial from "./components/login-social/LoginSocial";

type AuthScreenLayoutProps = {
  title: string;
  subtitle: string;
  description?: string;
  onBackPress: () => void;
  children: React.ReactNode; 
};

export const AuthScreenLayout: React.FC<AuthScreenLayoutProps> = ({
  title,
  subtitle,
  onBackPress,
  children,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("assets/images/header-img.png")}
        style={styles.headerImage}
      />
      <View style={styles.titleScreen}>
        <View style={styles.titleBlock}>
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={require("assets/images/chevron-left.png")}
              style={styles.chevronLeft}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>

        <View style={styles.formRegisterWrapper}>
          <Text style={styles.subTitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
          {children}
          <Or />
          <LoginSocial />
          <LoginLink />
        </View>
      </View>
    </View>
  );
};

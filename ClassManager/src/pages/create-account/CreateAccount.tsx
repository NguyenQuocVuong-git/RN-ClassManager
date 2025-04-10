import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { SCREEN } from "src/shared/constants/screen";
import { RootStackParamList } from "src/shared/type/type";
import { AuthScreenLayout } from "src/shared/ui/auth/AuthScreenLayout";
import AccountForm from "./components/account-form/AccountForm";
import { CREATE_ACCOUNT_SCREEN } from "./constants";

const CreateAccount: React.FC = () => {
  const navigate = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBackToBeginScreen = () => {
    navigate.navigate(SCREEN.BEGIN);
  };

  return (
    <AuthScreenLayout
      title={CREATE_ACCOUNT_SCREEN.CREATE_ACCOUNT}
      subtitle={CREATE_ACCOUNT_SCREEN.TITLE}
      description={ CREATE_ACCOUNT_SCREEN.SUB_TITLE}
      onBackPress={() => handleBackToBeginScreen()}
    >
      <AccountForm />
    </AuthScreenLayout>
  );
};

export default CreateAccount;

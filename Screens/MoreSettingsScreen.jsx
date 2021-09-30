import React, { useLayoutEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Settings,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  Avatar,
  Input,
  Button,
  Text,
  Icon,
  Switch,
  colors,
} from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import NotificationSettings from "../Components/NotificationSettings";
import PrivacySettings from "../Components/PrivacySettings";

const MoreSettingsScreen = ({ navigation, route }) => {
  const { colors } = useTheme();
  const [image, setImage] = useState();
  var showAccount = false;
  var showChats = false;
  var showNotifications = false;
  var showPrivacy = false;
  const [makeChanges, setMakeChanges] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: colors.text, fontWeight: "600", fontSize: 18 }}>
            {route.params.settingsName}
          </Text>
        </View>
      ),
    });
  }, [navigation]);

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      margin: 20,
    },
  });

  switch (route.params.settingsName) {
    case "Account": {
      showAccount = true;
      break;
    }
    case "Chats": {
      showChats = true;
      break;
    }
    case "Notifications": {
      showNotifications = true;
      break;
    }
    case "Privacy": {
      showPrivacy = true;
      break;
    }
  }
  return (
    <View>
      {showAccount ? (
        <View style={styles.container}>
          <TouchableOpacity
            disabled={makeChanges ? false : true}
            onPress={() => pickImage()}
          >
            <Avatar
              rounded
              size="xlarge"
              source={{
                uri:
                  image ||
                  "https://earncashto.com/wp-content/uploads/2021/06/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png",
              }}
            />
          </TouchableOpacity>
          <Input
            style={{ color: colors.text }}
            placeholderTextColor={colors.text}
            placeholder="Username"
            disabled={makeChanges ? false : true}
            value="Ram"
          />
          <Input
            style={{ color: colors.text }}
            placehol
            disabled
            value="9898989898"
          />
          <Button
            buttonStyle={{
              backgroundColor: colors.primary,
              height: 50,
              width: 200,
              borderRadius: 30,
              marginBottom: 30,
            }}
            title={makeChanges ? "Save Changes" : "Make Changes"}
            onPress={() => setMakeChanges(!makeChanges)}
          />
          <Button
            buttonStyle={{
              backgroundColor: "red",
              height: 50,
              width: 200,
              borderRadius: 30,
            }}
            title="Delete Account"
          />
        </View>
      ) : (
        <></>
      )}
      {showChats ? (
        <View style={styles.container}>
          <TouchableOpacity style={{ width: "100%" }}>
            <View
              style={{
                backgroundColor: colors.card,
                height: 70,
                borderRadius: 20,
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 20,
              }}
            >
              <Icon name="trash-bin" type="ionicon" size={24} color="red" />
              <Text h4 style={{ color: "red", marginLeft: 5 }}>
                Erase all chats
              </Text>
            </View>
          </TouchableOpacity>
          <Text h5 style={{ color: colors.text, marginTop: 10 }}>
            Erase all chats will delete all you chats from in your account.Once
            done you cannot restore the chats.
          </Text>
        </View>
      ) : (
        <></>
      )}
      {showNotifications ? <NotificationSettings /> : <></>}
      {showPrivacy ? <PrivacySettings /> : <></>}
    </View>
  );
};

export default MoreSettingsScreen;

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Settings,
  TouchableOpacity,
} from "react-native";
import { Text, Icon, Switch } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

const NotificationSettings = () => {
  const { colors } = useTheme();
  const [enableNotifications, setenableNotifications] = useState(
    Settings.get("enableNotifications")
  );
  const [enableFocus, setenableFocus] = useState(Settings.get("enableFocus"));
  const storeNotificationData = (enableNotifications) => {
    Settings.set(enableNotifications);
    setenableNotifications(Settings.get("enableNotifications"));
    setenableFocus(false);
  };
  const storeFocusData = (enableFocus) => {
    Settings.set(enableFocus);
    setenableFocus(Settings.get("enableFocus"));
  };
  const createFocusMode = () => {};
  return (
    <ScrollView style={{ height: "100%" }}>
      <View style={styles.notificationContainer}>
        <View
          style={{
            backgroundColor: colors.card,
            height: 70,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 20,
          }}
        >
          <Text h4 style={{ color: colors.text }}>
            Enable Notifications
          </Text>
          <Switch
            value={enableNotifications}
            onValueChange={() =>
              storeNotificationData({
                enableNotifications: !enableNotifications,
              })
            }
            color={colors.primary}
          />
        </View>
        <Text
          h5
          style={{ color: colors.text, marginTop: 10, marginBottom: 20 }}
        >
          Enabling notification will help you get notifications when you are not
          using the app.
        </Text>
        {enableNotifications ? (
          <View>
            <View
              style={{
                backgroundColor: colors.card,
                height: 70,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <Text h4 style={{ color: colors.text }}>
                Enable Focus Modes
              </Text>
              <Switch
                color={colors.primary}
                value={enableFocus}
                onValueChange={() =>
                  storeFocusData({
                    enableFocus: !enableFocus,
                  })
                }
              />
            </View>
            <Text h5 style={{ color: colors.text, marginTop: 10 }}>
              When enabled you can set from whom you can receive notifications
              based on time.
            </Text>
          </View>
        ) : (
          <></>
        )}
        {enableFocus ? (
          <TouchableOpacity onPress={() => createFocusMode()}>
            <View
              style={{
                backgroundColor: colors.card,
                height: 70,
                borderRadius: 20,
                flexDirection: "row",
                alignItems: "center",
                padding: 20,
                marginTop: 20,
              }}
            >
              <Icon name="add-circle" type="ionicons" color={colors.primary} />
              <Text style={{ color: colors.primary, marginLeft: 10 }}>
                Add Focus Modes
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  notificationContainer: {
    margin: 20,
  },
});

import React, { useState } from "react";
import { StyleSheet, Settings, View } from "react-native";
import { Text, Switch } from "react-native-elements";
import { useTheme } from "@react-navigation/native";
import * as Permissions from "expo-permissions";

const PrivacySettings = () => {
  const { colors } = useTheme();
  const [enableContacts, setenableContacts] = useState(
    Settings.get("enableContacts")
  );
  const [enableLocation, setenableLocation] = useState(
    Settings.get("enableLocation")
  );
  const contactsPermission = (enableContacts) => {
    Settings.set(enableContacts);
    setenableContacts(Settings.get("enableContacts"));
  };
  const locationPermission = (enableLocation) => {
    Settings.set(enableLocation);
    setenableLocation(Settings.get("enableLocation"));
  };
  return (
    <View style={{ margin: 10 }}>
      <Text style={{ color: colors.text, margin: 20 }}>
        Privacy Premissions
      </Text>
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
          Contacts
        </Text>
        <Switch
          color={colors.primary}
          value={enableContacts}
          onValueChange={() =>
            contactsPermission({ enableContacts: !enableContacts })
          }
        />
      </View>
      <Text h5 style={{ color: colors.text, marginTop: 10 }}>
        Contacts are used to find the people who are using this application.
      </Text>
      <View
        style={{
          backgroundColor: colors.card,
          height: 70,
          marginTop: 20,
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Text h4 style={{ color: colors.text }}>
          Location
        </Text>
        <Switch
          color={colors.primary}
          value={enableLocation}
          onValueChange={() =>
            locationPermission({ enableLocation: !enableLocation })
          }
        />
      </View>
      <Text h5 style={{ color: colors.text, marginTop: 10 }}>
        Location Data is only used when you are using emergency service.
      </Text>
    </View>
  );
};

export default PrivacySettings;

const styles = StyleSheet.create({});

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';

const Contacts = () => {
    let [error, setError] = useState(undefined);
    let [contacts, setContacts] = useState(undefined);

    useEffect(() => {
        (async () => {
            const {status} = await Contacts.requestPermissionsAsync();
            if (status === "granted") {
                const {data} = await Contacts.getContactsAsync({
                    fields:[Contacts.Fields.FirstName, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers[0]]
                });
                if (data.length > 0) {
                    console.log(data);
                    setContacts(data);
                }
                else {
                    setError("No Contacts Found");
                }
            } else {
                setError("Permission to access contacts denied.")
            }
        })
    })
  return (
    <View>
      <Text>Contacts Screem</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
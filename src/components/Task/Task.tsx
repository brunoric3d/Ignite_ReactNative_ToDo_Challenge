import React, { useState } from "react";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import IconIO from 'react-native-vector-icons/Ionicons'
import IconAD from 'react-native-vector-icons/AntDesign'


type Props = {
  text: string;
  onRemove(): void;
  isDone: boolean;
  onPressDone(): void;

}

export function Task({ text, isDone, onRemove, onPressDone }: Props) {

  return (
    <>
      <View style={styles.taskItemContainer}>
        <TouchableHighlight
          style={styles.taskItemButton}
          onPressIn={onPressDone}>

          {!isDone ?
            <View style={styles.taskItemButtonUnpressed}></View>
            : <IconAD name='checkcircle' size={20} color={'#8284FA'} />}
        </TouchableHighlight>
        <Text style={
          !isDone ?
            styles.taskItemText : styles.taskItemTextDone
        }>{text}</Text>
        <TouchableOpacity onPress={onRemove}>
          <IconIO name="trash-outline" size={15} color="#808080" />
        </TouchableOpacity>

      </View>
    </>
  )
}
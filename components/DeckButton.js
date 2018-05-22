import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export function DeckButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableOpacity>
  )
}

import React from "react"
import { View, Image, Text } from "react-native"
import { CONTANTS } from "../../services/api"
import { Message } from "../../screens/openAI/types"
import Chat from "../../assets/chat.png"
import { styles } from "./styles"

export default function MessagesAndResponsesItem({ item }: { item: Message }) {
  const codePattern = /```(\w+)?\s+([\s\S]*?)\s+```/s
  const codeMatches = item.content.match(codePattern)
  const segments = item.content.split(codePattern)

  return (
    <View
      style={{
        backgroundColor:
          item.role === CONTANTS.role.user ? "#343541" : "#444654",
        ...styles.textWrapper,
      }}
    >
      {item.role !== CONTANTS.role.user ? (
        <Image source={Chat} style={styles.image} />
      ) : null}
      {codeMatches ? (
        segments.map((segment, index) => {
          if (codeMatches[index]) {
            return (
              <Text key={index} style={[styles.botUserText, styles.codeText]}>
                {codeMatches[index]}
              </Text>
            )
          } else {
            return (
              <Text
                key={index}
                style={{
                  color: item.role === CONTANTS.role.user ? "#fff" : "#fff",
                  marginTop: item.role === CONTANTS.role.user ? "4%" : "2%",
                  ...styles.botUserText,
                }}
              >
                {segment}
              </Text>
            )
          }
        })
      ) : (
        <Text
          style={{
            color: item.role === CONTANTS.role.user ? "#fff" : "#fff",
            marginTop: item.role === CONTANTS.role.user ? "4%" : "2%",
            ...styles.botUserText,
          }}
        >
          {item.content}
        </Text>
      )}
    </View>
  )
}

import { Text, View } from "react-native";

const VocabWord = ({ item }) => {
  return (
    <View>
      <Text>{item?.word}</Text>
      <Text>{item?.category}</Text>
      <Text>{item?.meaning}</Text>
      <Text>{item?.sentence}</Text>
    </View>
  );
};

export default VocabWord;

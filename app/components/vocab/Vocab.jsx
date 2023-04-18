import { ActivityIndicator, FlatList, Text, View } from "react-native";
import VocabWord from "./VocabWord";
import fetchWords from "../../hooks/fetchWords";

const Vocab = () => {
  const { data, isLoading, error } = fetchWords();

  return (
    <View>
      <Text>Vocabulary</Text>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item?.word}
          renderItem={({ item }) => <VocabWord item={item} />}
        />
      )}
    </View>
  );
};

export default Vocab;

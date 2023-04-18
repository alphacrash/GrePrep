import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Vocab from "./components/vocab/Vocab";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Vocab />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

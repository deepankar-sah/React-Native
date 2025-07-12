import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

const index = () => {
  const [data, setData] = useState([]);
  const [loding, setloding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const result = await response.json();

        setData(result.results);
        console.log(result.results);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setloding(false);
      }
    };

    fetchData();
  }, []);

  if (loding) {
    return <Text>Loding data.....</Text>;
  }

  if (error) {
    return <Text> Error: {error}</Text>;
  }

  return (
    <View>
      <Text>User data</Text>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.email}</Text>
              <Text>{item.location.city}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
export default index;

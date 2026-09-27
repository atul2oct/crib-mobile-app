import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"

const properties = [
  {id: "1",title: "Modern Villa", city: "Mumbai", price: "1.2cr"},
  {id: "2",title: "Sea Side Flat", city: "Mumbai", price: "85L"},
  {id: "3",title: "Studio Loft", city: "Banglore", price: "32L"},
];

export default function RootLayout() {
  return (
    <SafeAreaView className="bg-white p-4 flex-1">
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>subscribe to CombatCoder</Text>
        <TextInput
          placeholder="Search city..."
          placeholderTextColor="#999"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            marginTop: 12,
          }}
        />
        <TouchableOpacity
          onPress={() => alert("Searching!")}
          style={{
            backgroundColor: "#1709e6e8",
            padding: 12,
            marginTop: 8,
            borderRadius: 12,
            alignItems: "center",
          }}

        >
          <Text style={{ color: "white" }}>Search</Text>
        </TouchableOpacity>
        {/* 15:08 */}
      </View>

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({item})=>(
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", color:"blue"  }}>{item.city}</Text>
            <Text style={{ fontSize: 10, fontWeight: "bold", color:"grey" }}>{item.price}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

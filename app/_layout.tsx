
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
  <SafeAreaView
    style={{ flex: 1, backgroundColor: "#00000063"}}
  >
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <Text>subscribe to CombatCoder</Text>
      <TextInput placeholder="Search city..." placeholderTextColor="#999" style= {{
        borderWidth: 1,
        borderColor: "#ddd", 
        borderRadius: 10,
        marginTop: 12
      }}
      />
      <TouchableOpacity
      onPress={()=> alert("Searching!")}
        style={{
          backgroundColor: "#1709e6e8",
          padding: 12,
          marginTop: 8,
          borderRadius: 12,
          alignItems: "center"
        }}
      >
        <Text style={{color:"white"}}>Search</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
}

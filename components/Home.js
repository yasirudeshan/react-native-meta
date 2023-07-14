import { ScrollView, View, Text} from "react-native";


export default function Home (){
    return (
        <View style = {{flex: 0.75}}>
            <ScrollView indicatorStyle={"white"} style={{backgroundColor:'black'}}>
                <Text style={{color:'white'}}>
                    Hello Yasiru mcn
                </Text>

            </ScrollView>
        </View>
    )
}
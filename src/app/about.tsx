import { Text, View } from "react-native";
import Header from "@/components/header";

export default function Page() {
    return (
        <View className="flex-1">
            <Header />
            <View className="flex flex-col items-center justify-center">
                <Text className="text-4xl font-bold">About</Text>
                <Text className="text-lg mt-4">This is a simple about page</Text>
            </View >
        </View >
    );
}
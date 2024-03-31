import { View, Text } from "react-native";
import Header from "@/components/header";

export default function Page() {
    return (
        <View className="flex flex-1">
            <Header />
            <View className="flex-col items-center justify-center">
                <Text className="text-4xl font-bold">PRODUK</Text>
                <Text className="text-lg mt-4">THIS HERE IS OUR PRODUCT:</Text>
            </View >
        </View >
    );
}


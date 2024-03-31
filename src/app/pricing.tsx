import { Button, Text, View } from "react-native";
import { Link } from "expo-router";
import Header from "@/components/header";
async function fetchPrice() {
    const response = await fetch("/api/price/himom");
    const data = await response.json();
    alert(`$$${data.price}`);
}
export default function Page() {
    // const pricing = await(await fetch("/api/price/himom")).json();
    // console.log(pricing);
    return (
        <View className="flex flex-1">
            <Header />
            <Button onPress={() => fetchPrice()} title="Fetch Price" />
            <Text className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to Project ACME
            </Text>
            <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                Discover and collaborate on amce. Explore our services now.
            </Text>
            <View className="gap-4">
                <Link
                    suppressHighlighting
                    className="h-9 items-center justify-center overflow-hidden rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 web:shadow ios:shadow transition-colors hover:bg-gray-900/90 active:bg-gray-400/90 web:focus-visible:outline-none web:focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/"
                >
                    Explore
                </Link>
            </View>
        </View>
    );
}
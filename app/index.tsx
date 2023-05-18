import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
	Nearbyjobs,
	Popularjobs,
	ScreenHeaderBtn,
	Welcome,
} from "../components";

export default function Home() {
	const router = useRouter();
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerShadowVisible: false,
					headerStyle: {
						backgroundColor: COLORS.lightWhite,
					},
					headerTitle: "",
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.menu}
							dimension={"50%"}
							handlePress={() => {}}
						/>
					),

					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={icons.profile}
							dimension={"100%"}
							handlePress={() => {}}
						/>
					),
				}}
			/>

			<ScrollView showsVerticalScrollIndicator={false}>
				<Welcome />
				<Popularjobs />
				<Nearbyjobs />
			</ScrollView>
		</SafeAreaView>
	);
}

import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles, { getButtonStyle, getButtonTextStyle } from "./tabs.style";
import { SIZES } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
	return (
		<TouchableOpacity
			style={getButtonStyle(name, activeTab)}
			onPress={onHandleSearchType}
		>
			<Text style={getButtonTextStyle(name, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				horizontal
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearchType={() => setActiveTab(item)}
					/>
				)}
				contentContainerStyle={{ columnGap: SIZES.small / 2 }}
				keyExtractor={(item) => item}
			/>
		</View>
	);
};

export default Tabs;

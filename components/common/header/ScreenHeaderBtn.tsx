import { Image, TouchableOpacity } from "react-native";

import styles, { getBtnImg } from "./screenheader.style";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
	return (
		<TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
			<Image
				source={iconUrl}
				resizeMode="contain"
				style={getBtnImg(dimension)}
			/>
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn;

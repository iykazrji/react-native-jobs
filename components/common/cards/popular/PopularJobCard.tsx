import { View, Text, TouchableOpacity, Image } from "react-native";

import styles, {
	getContainerStyle,
	getJobNameStyle,
	getLogoContainerStyle,
	getPublisherStyle,
} from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
	return (
		<TouchableOpacity
			style={getContainerStyle(selectedJob, item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={getLogoContainerStyle(selectedJob, item)}>
				<Image
					source={{
						uri: checkImageURL(item?.employer_logo)
							? item.employer_logo
							: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
					}}
					resizeMode="contain"
					style={styles.logoImage}
				/>
			</TouchableOpacity>
			<Text style={styles.companyName} numberOfLines={1}>
				{item.employer_name}
			</Text>

			<View style={styles.infoContainer}>
				<Text
					style={getJobNameStyle(selectedJob, item)}
					numberOfLines={1}
				>
					{item.job_title}
				</Text>
				<View style={styles.infoWrapper}>
					<Text style={getPublisherStyle(selectedJob, item)}>
						{item?.job_publisher} -
					</Text>
					<Text style={styles.location}> {item.job_country}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default PopularJobCard;

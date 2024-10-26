import {View} from "react-native";

function Icon(props) {
    return null;
}

const Boat = ({ header, description, icon_name, poster}) => {
    return (
        <View>


            <Text>
                <Icon name={icon_name} size={20} color="#808080"/>
                {header}
            </Text>

            <Text>
                {description}
            </Text>
            <Image source={poster} style={{width:400, height:300}}/>


        </View>
    );
};

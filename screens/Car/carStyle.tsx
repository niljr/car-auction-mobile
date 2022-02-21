import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20
    },
    carDataContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    cardData: {
        // width: width - 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        padding: 5,
    },
    carImage: {
        width: 150,
        height: 150,
        marginHorizontal: 20
    },
    infoText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2
    },

    wonContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    finishContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20

    }
});

export default styles;
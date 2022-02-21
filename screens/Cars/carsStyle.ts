import { StyleSheet, Dimensions }  from 'react-native';

const { height, width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    filterContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        textAlign: 'center',
        marginVertical: 10
    },
    list: {
    },
    carImage: {
        width: 80,
        height: 80,
        marginRight: 15
    }
});

export default styles;
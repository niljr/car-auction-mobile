import { StyleSheet } from 'react-native';
import { colors } from '../../../styles';

const Styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        shadowColor: '#BFBFBF',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4,
        elevation: 8,
        borderRadius: 5,
        padding: 10
    }
})

export default Styles;
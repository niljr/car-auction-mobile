import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get('screen');

export const colors = {
    background: '#fff',
    backgroundGray: '#EFEFEF',
    backgroundBlack: '#242729',
    inputBg: '#F9F9F9',
    base: '#000',
    lightGray: '#BBBBBB',
    mediumLightGray: '#7E7E7E',
    mediumGray: '#797874',
    light: '#fff',
    lightBlue: '#F2F7FC',
    black: '#222222',
    darkGray: '#3D3D3D',
    darkerBlack: '#191919',
    dark: '#4A4A4A',
    brand: '#242729',
    yellow: '#F2BD00',
    orange: '#Df5000',
    error: '#F34247',
    divider: '#E2E2E2',
    disabled: '#8fad82',
    label: '#959595'
};

export const colorVariants = {
    primary: { background: ['#242729', '#242729'], label: '#fff' },
    disabled: { background: ['#D3D3D3', '#999999'], label: colors.light },
    light: { background: ['#F6F6F6', '#DFDFDF'], label: '#636466' },
    // secondary: colors.dark,
    // success: '#38B471',
    // warning: '#ffc107',
    // danger: colors.error,
    link: { label: colors.brand }
}

export const iconColor = {
    green: '#FF7A00',
    yellowGreen: '#FF7A00',
    yellow: '#FFCA6B'
};

export const headerBackground = colors.background;

export const pageContainer = {
    flex: 1,
    backgroundColor: colors.background
};

export const rowContainer = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
};

export const popupContainer = {
    backgroundColor: colors.background,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
};

export const backgroundImage = {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null
};

export const activityIndicator = {
    marginTop: 80
};

export const windowSpacing = 15;

const styles = StyleSheet.create({
    flexCentered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexSpaced: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flexedEnd: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    flexedRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flexedRowCentered: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flexedRowSpaced: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textCenter: {
        textAlign: 'center'
    },
    rightSpacing: {
        marginRight: 10
    },
    leftSpacing: {
        marginLeft: 10
    },
    topSpacing: {
        marginTop: 15
    }
});

export default styles;

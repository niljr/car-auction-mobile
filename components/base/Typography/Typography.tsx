import * as React from 'react';
import { View, Text, TextProps } from 'react-native';
// import { styles } from './typographyStyles';
import { useFonts } from 'expo-font';

import type { FontWeight, FontSize, Color } from '../../../types/index';
import { colors } from '../../../styles/index';
// import { capitalize } from '~/utils/helpers';

export interface TypographyProps extends TextProps {
    fontWeight?: FontWeight,
    size?: number,
    style?: Object,
    color?: Color,
    children: any,
    maxFontSizeMultiplier?: number,
    fontFamily?: 'WorkSans' | 'Roboto'
}

const Typography: React.FC<TypographyProps> = ({
    fontWeight = 'regular', size = 16, style, color = 'base', children, maxFontSizeMultiplier = 1.2, fontFamily = 'Roboto', ...extraProps
}) => {
    let [fontsLoaded] = useFonts({
        'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
      });

      if (!fontsLoaded) {
        return <Text>Loading Font.</Text>;
      }

    return (
        <Text
            // maxFontSizeMultiplier={maxFontSizeMultiplier}
            allowFontScaling={false}
            style={{
                fontSize: size + 1,
                fontFamily: `${fontFamily}-${fontWeight ? fontWeight.replace(/^\w/, m => m.toUpperCase()) : 'Regular'}`,
                color: colors[color],
                ...style
            }}
            {...extraProps} >
            {children}
        </Text>
    );
};

export default Typography;

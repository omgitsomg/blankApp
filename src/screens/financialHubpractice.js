import React from "react";
import {View, Text} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
// we do figmaColors instead of {figmaColors} because in figmaColors.js it is export default
// If it was export const then we use {figmaColors}
import figmaColors from '../res/figmaColors'
import MaskedView from '@react-native-masked-view/masked-view';

const FinancialHubGradientText = (props) => {
    return (
        <MaskedView maskElement={<Text style={[props.style, {backgroundColor: 'transparent'}]}>Financial {'\n'} Hub</Text>}>
            <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 1, y: 3}}
                locations={[0.5, 0.5]}
                colors={[figmaColors.primaryGreen, figmaColors.primaryTeal]}>
                    <Text style={[props.style, {opacity: 0}]}>Financial {'\n'} Hub</Text>
            </LinearGradient>
        </MaskedView>
    )
}

export default FinancialHubGradientText;
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#F9A825',
        fontSize: 16,
        fontWeight: 'normal',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        width: 100,
        // flex: 1,
        // alignSelf: 'flex-end',
        // alignItems: 'flex-end',
        backgroundColor: 'transparent',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#F9A825',
        margin: 4
    }
};

export default Button;
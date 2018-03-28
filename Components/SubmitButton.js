/**
 * Created by sxy on 2018/3/28.
 */
import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';

export default function SubmitButton({children,onPress,style=[]}) {
    return (
        <TouchableOpacity>
            <Text onPress={onPress} style={[styles.submit,style]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    submit:{
        borderWidth:2,
        padding:20,
        paddingRight:80,
        paddingLeft:80,
        borderRadius:8,
        fontSize:35,
        alignSelf:'flex-start'
    }
});


import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding        : 15,
        borderRadius   : 10,
        marginBottom   : 10,
        flexDirection  : 'row',
        backgroundColor: '#fff',
        alignItems     : 'center',
        justifyContent : 'space-between',
    },
    itemLeft:{
        flexDirection: 'row',
        flexWrap     : 'wrap',
        alignItems   : 'center',
    },
    square:{
        width          : 24,
        height         : 24,
        borderRadius   : 5,
        marginRight    : 10,
        backgroundColor: '#FAEAEC',
    },
    itemText:{
        fontSize:16,
        maxWidth: '85%',
        color:'#101419',
    },
});

export default Task;
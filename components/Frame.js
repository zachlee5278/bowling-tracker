import { Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from 'react';
import styles from "../styles";

const Frame = (props) => {

    return (
        props && props.frameState && (
            <TouchableOpacity onPress={() => props.handlePress(props.frameState.item.id)}>
                <View style={[styles.frameGameView, styles.flexRow]}>
                    <View style={styles.floatLeft}>
                        <Text>{props.frameState.item.id}</Text>
                    </View>
                    <View style={[styles.flex_2, styles.justifyCenter, styles.alignCenter]}>
                        <Text style={styles.firstThrowText}>{props.frameState.item.firstThrow}</Text>
                    </View>
                    <View style={[styles.flexRow, styles.flex_1]}>
                        <View style={[styles.secondThirdThrowContainer, styles.alignCenter, styles.justifyCenter, {flex : 1}]}>
                            <Text style={styles.secondThirdThrowText}>{props.frameState.item.secondThrow}</Text>
                        </View>

                            {
                                props.frameState.item.id === 10 && (
                                    <View style={[styles.secondThirdThrowContainer, {flex: 1}]}>
                                        <Text style={styles.secondThirdThrowText}>{props.frameState.item.thirdThrow}</Text>
                                    </View> 

                                )
                            }
                    </View>
                </View>
            </TouchableOpacity>
        )

    );
}

export default Frame;
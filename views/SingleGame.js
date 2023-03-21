import React, { useState, useEffect } from 'react';
import { Button, FlatList, Modal, SafeAreaView, Text, View } from 'react-native';
import { Stopwatch } from 'react-native-stopwatch-timer';
import Frame from '../components/Frame';
import styles from '../styles';

const SingleGame = () => {

    const [gameState, setGameState] = useState([
        { index: 0, id: 1, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 1, id: 2, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 2, id: 3, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 3, id: 4, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 4, id: 5, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 5, id: 6, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 6, id: 7, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 7, id: 8, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 8, id: 9, firstThrow: null, secondThrow: null, frameBonusScore: 0, frameTotalScore: 0, isStrike: false, isSpare: false, isSplit: false, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
        { index: 9, id: 10, firstThrow: null, secondThrow: null, thirdThrow: null, hasThirdThrow: false, frameBonusScore: 0, frameTotalScore: 0, frameOptions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], frameFinished: false },
    ])

    const [frameModalOpen, setFrameModalOpen] = useState(false)
    const [stopwatchStart, setStopWatchStart] = useState(false)

    useEffect(() => {
        setStopWatchStart(true)
    }, [])
    const handleFramePress = (frame) => {
        setFrameModalOpen(true)
    }

    const stopwatchStyles = {
        container : {
            backgroundColor: '#FFFFFF'
        }
    }


    return (
        <View style={[styles.fullWidth, styles.fullHeight]}>
            <View style={styles.alignCenter}>
                <Stopwatch start={stopwatchStart} options={stopwatchStyles}/>
            </View>
            <View>
                <FlatList data={gameState} renderItem={(item) => <View style={styles.alignCenter}><Frame frameState={item} handlePress={handleFramePress}/></View>} keyExtractor={(item) => item.index} extraData={gameState} ItemSeparatorComponent={() => <View style={{height :10}}/>}/>
            </View>
            <Modal
                visible={frameModalOpen}
                animationType="slide"
                // styles={styles.modal}
                presentationStyle="pageSheet"
            >
                <SafeAreaView style={{border: 'solid red'}}>
                    <Button onPress={() => setFrameModalOpen(false)} title="Close"/>
                </SafeAreaView>
            </Modal>
        </View>
    );
}
 
export default SingleGame;
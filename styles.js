import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    modal: {
        width: '100px',
        height: '100px',
        borderColor: 'red'
    },
    fullWidth: {
        width: '100%'
    },
    fullHeight: {
        height: '100%'
    },
    frameGameView : {
        borderStyle : 'solid',
        borderWidth: "5px",
        borderColor: 'black',
        width: '75%',
        height: 150
    },
    floatLeft : {
        position : 'absolute',
        top: 10,
        left: 10
    },
    flexRow : {
        flexDirection: 'row'
    },
    flex_1 : {
        flex : 1
    },
    flex_2 : {
        flex : 2
    },
    alignEnd : {
        alignItems: 'flex-end'
    },
    justifyEnd : {
        justifyContent: 'flex-end'
    },
    justifyCenter : {
        justifyContent: 'center'
    },
    alignCenter : {
        alignItems : 'center'
    },
    alignStart : {
        alignItems: 'flex-start'
    },
    firstThrowText: {
        fontSize: 150
    },
    secondThirdThrowContainer : {
        borderBottomWidth : 2,
        borderLeftWidth : 2,
        borderColor: 'black',
        borderStyle : 'solid',
        height : 50,
        alignItems: 'center'
    },
    secondThirdThrowText : {
        fontSize : 30.
    },
    stopwatchContainer : {
        backgroundColor : '#FFFFFF'
    }
})
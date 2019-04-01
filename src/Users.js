import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default class Users extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
            headerStyle: {
                backgroundColor: '#59cac6',
            },
            headerTintColor: '#fff',
        }
    }

    constructor(props) {
        super(props)

    }


    render() {
        const { navigation } = this.props
        const id = navigation.getParam('id')
        const userId = navigation.getParam('userId')
        const title = navigation.getParam('title')
        const completed = navigation.getParam('completed')

        return (
            <View style={styles.container}>

                {/* Row for ID */}
                <View style={styles.smallContainer}>
                    <View style={styles.firstInRow}>
                        <Text style={styles.textFirst}>ID</Text>
                    </View>

                    <View style={styles.secondInRow}>
                        <Text style={styles.textSecond}>{id}</Text>
                    </View>
                </View>

                {/* Row for Title */}
                <View style={styles.smallContainer}>
                    <View style={styles.firstInRow}>
                        <Text style={styles.textFirst}>TITLE</Text>
                    </View>

                    <View style={styles.secondInRow}>
                        <Text style={styles.textSecond} >{title}</Text>
                    </View>
                </View>

                {/* Row for User ID */}
                <View style={styles.smallContainer}>
                    <View style={styles.firstInRow}>
                        <Text style={styles.textFirst}>USER ID</Text>
                    </View>

                    <View style={styles.secondInRow}>
                        <Text style={styles.textSecond}>{userId}</Text>
                    </View>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    smallContainer: {
        flexDirection: 'row',
        height: 60,
        width: '87%',
        borderWidth: 1,
        borderColor: '#59cac6',
        borderRadius: 30,
        margin: 25,
        top: 25
    },
    firstInRow: {
        flex: 1,
        backgroundColor: '#59cac6',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondInRow: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    textFirst: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    textSecond:{
        color:'#333232',
        padding:10
    }

})
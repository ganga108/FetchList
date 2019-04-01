import React, { Component } from 'react';
import { FlatList, TouchableOpacity, Text, View,StyleSheet } from 'react-native';



export default class DataList extends Component {
    static navigationOptions={
        title:'List',
        headerStyle: {
            backgroundColor: '#59cac6',
          },
          headerTintColor: '#fff', 
          
    }
    state = {
        dataList: [],


    }
    constructor(props) {
        super(props)
       

    }
    componentDidMount() {
        return fetch('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataList: responseJson
                })
                console.table(responseJson)
            })
            .catch((error) => console.log(error))
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.listContainter}
                onPress={() => { this._onPress(item) }}
            >
             <Text 
             style={styles.listText}
             > {item.id}
                     <Text style={{color:'#59cac6'}}>.</Text>
                {item.title}
             </Text>

            </TouchableOpacity>

        )
    }

    _onPress(item) {
        this.props.navigation.navigate('Target', {
            id: item.id,
            title: item.title,
            userId:item.userId
        });
    }

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
            }}>

                <FlatList
                    style={{ flexGrow: 0 }}
                    data={this.state.dataList}
                    renderItem={this.renderItem}
                />


            </View>
        );
    }
}
const styles=StyleSheet.create({
    listContainter:{
        padding:20,
        paddingTop:30,
        paddingBottom:30,
        borderBottomColor:'#c2c2c2',
        borderBottomWidth:.4,
       
        
    },
    listText:{
        fontSize:18,
        color:'#333232',
        height:22,
        
    }
})
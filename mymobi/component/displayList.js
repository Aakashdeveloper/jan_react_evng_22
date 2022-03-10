import React from 'react';
import { StyleSheet, Button, View, ScrollView, Text, Image } from 'react-native';

function DisplayList(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                            uri: item.restaurant_thumb,
                            }}
                        />
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
            
        }
    }

    return(
        <View>
           <ScrollView style={styles.container}>
                {renderList(props)}
           </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    tinyLogo: {
        width: 70,
        height: 70,
    },
    scrollView: {
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    }
})

export default DisplayList;
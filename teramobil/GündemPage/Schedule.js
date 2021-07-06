import React, {useState} from 'react';
import {View, TouchableOpacity, Text, SafeAreaView} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Schedule = (props) => {
    const [items, setItems] = useState({});


    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    /*
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                        });
                    }

                     */
                }
            }
            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key];
            });
            setItems(newItems);
        }, 1000);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <View>
                                <Text style={{fontSize:20}}>{item.name}</Text>
                                <Text>{item.time}</Text>
                            </View>
                            <Avatar.Text label="J" />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1,marginTop:20}}>
            <Agenda
                items={{
                    '2021-07-22': [{name: 'randevu 1',time:'12.00-13.00'}],
                    '2021-07-23': [{name: 'randevu 2',time:'12.00-13.00'}],
                    '2021-07-24': [{name: 'randevu 3',time:'12.00-13.00'}],
                    '2021-07-25': [{name: 'randevu 4',time:'12.00-13.00'}, {name: 'randevu 5',time:'12.00-13.00'}]
                }}

                loadItemsForMonth={props.loadItems}
                selected={'2021-07-05'}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Schedule;
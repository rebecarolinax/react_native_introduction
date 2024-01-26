import { View, StyleSheet, Text } from "react-native";

const Person = ({ name, age }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Nome: {name}</Text>
            <Text style={styles.txt}>Idade: {age}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'darkred',
        padding: 10,
        margin: 10,
        borderRadius: 5
    },
    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase'
    }
})

export default Person;
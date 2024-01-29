import { View, StyleSheet, Text } from "react-native";

const Game = ({ title, date, developer }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Título:</Text>
            <Text style={styles.txt_}>{title}</Text>
            <Text style={styles.txt}>Data de lançamento:</Text>
            <Text style={styles.txt_}>{date}</Text>
            <Text style={styles.txt}>Desenvolvedor:</Text>
            <Text style={styles.txt_}>{developer}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        padding: 20,
        margin: 10,
        borderRadius: 50
    },
    txt: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        fontFamily: 'Poppins_400Regular'
        // textTransform: 'uppercase',
        // fontFamily: 'Cairo_700Bold'
    },

    txt_: {
        fontSize: 20,
        fontWeight: '500',
        color: 'darkred',
        fontFamily: 'Poppins_400Regular'
        // textTransform: 'uppercase',
    }
})

export default Game;
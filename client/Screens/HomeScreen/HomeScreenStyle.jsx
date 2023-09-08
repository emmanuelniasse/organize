import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    btn: {
        borderWidth: 0.25,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    addButton: {
        height: 20,
        width: 20,
        borderWidth: 0.25,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    cancelButton: {
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderWidth: 0.25,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

export default styles;

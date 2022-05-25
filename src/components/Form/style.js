import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    formContext: {
        width: '100%',
        height: '100%',
        botton: 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 30,
    },

    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
    },

    formLabel: {
        color: 'black',
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        margin: 12,
        height: 40,
        paddingLeft: 20,

    },

    ButtonCalculetor:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#1e53a8',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalculetor: {
        fontSize: 24,
        color: '#ffffff',

    }
  
});

export default styles
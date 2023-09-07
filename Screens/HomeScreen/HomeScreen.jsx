import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Pressable } from 'react-native';
import axios from 'axios';

// CSS
import styles from './HomeScreenStyle';

const HomeScreen = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputDisplayed, setInputDisplayed] = useState(false);
    const [areCategoriesFetched, setAreCategoriesFetched] =
        useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const responseCategories = await axios.get(
                    'http://localhost:3000/classes/'
                );
                setCategories(responseCategories.data.result);
                setAreCategoriesFetched(true);
            } catch (err) {
                console.log(
                    'Erreur lors de la requête (classes) : ' + err
                );
            }
        };
        if (!areCategoriesFetched) {
            getCategories();
        }
    }, [areCategoriesFetched]);

    const createCategory = async (val) => {
        let newCategory = {
            name: val,
        };

        await axios.post(
            'http://localhost:3000/classes/',
            newCategory
        );

        setAreCategoriesFetched(false);
        setInputValue('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home</Text>

            {/* Categories (db datas) */}
            {categories.map((category) => (
                <Pressable
                    key={category._id}
                    onPress={() =>
                        navigation.navigate('Category', {
                            categoryName: category.name,
                        })
                    }
                >
                    <Text>{category.name}</Text>
                </Pressable>
            ))}

            {/* Add button  */}
            {!inputDisplayed && (
                <Pressable
                    style={styles.addButton}
                    onPress={() => setInputDisplayed(true)}
                >
                    <Text>+</Text>
                </Pressable>
            )}

            {/* Input and cancel button  */}
            {inputDisplayed && (
                <>
                    <TextInput
                        onChangeText={setInputValue}
                        value={inputValue}
                        placeholder='Ex: Enveloppe'
                        style={styles.btn}
                    />
                    <Pressable
                        style={styles.cancelButton}
                        onPress={() => createCategory(inputValue)}
                    >
                        <Text>Envoyer</Text>
                    </Pressable>

                    <Pressable
                        style={styles.cancelButton}
                        onPress={() => setInputDisplayed(false)}
                    >
                        <Text>Annuler</Text>
                    </Pressable>
                </>
            )}
        </View>
    );
};

export default HomeScreen;

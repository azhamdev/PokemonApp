import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { ms } from 'react-native-size-matters';

// const pokePath = "https://pokeapi.co/api/v2/";
// const pokeQuery = "pokemon?limit=151&offset=0";
// const firstGenPokemonPath = `${pokePath}${pokeQuery}`;

export default function HomeScreen({ navigation }) {
    // const [firstGenPokemonDetails, setfirstGenPokemonDetails] = useState([]);
    // useEffect(() => {
    //     const fetchFirstGenPokemons = async () => {
    //         const firstGenPokemonIdsResponse = await fetch(firstGenPokemonPath);
    //         const firstGenPokemonIdsBody = await firstGenPokemonIdsResponse.json();

    //         const firstGenPokemonDetails = await Promise.all(
    //             firstGenPokemonIdsBody.results.map(async (p) => {
    //                 const pDetails = await fetch(p.url);

    //                 return await pDetails.json();
    //             })
    //         );

    //         setfirstGenPokemonDetails(firstGenPokemonDetails);
    //     };

    //     fetchFirstGenPokemons();
    // }, []);

    // const logOut = () => {
    //     auth()
    //         .signOut()
    //         .then(() => {
    //             console.log('Sign Out');
    //             navigation.replace("LoginScreen")
    //         });
    // }

    // const renderPokemon = ({ item }) => {
    //     return (
    //         <View style={styles.pokemonContainer}>
    //             <Text style={styles.pokemonTitle}>
    //                 {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
    //             </Text>
    //             <Image
    //                 style={styles.pokemonSprite}
    //                 source={{
    //                     uri: item.sprites.front_default,
    //                 }}
    //             />
    //         </View>
    //     );
    // };
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <FlatList data={firstGenPokemonDetails} renderItem={renderPokemon} />
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
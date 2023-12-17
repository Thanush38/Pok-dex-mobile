import { StyleSheet, Text, View,Image } from 'react-native';
import Chart from '../Chart/Chart.js';

function Details(props){
    const colors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    const stats = [props.pokemon.stats[0].base_stat,props.pokemon.stats[1].base_stat,props.pokemon.stats[2].base_stat,props.pokemon.stats[3].base_stat,props.pokemon.stats[4].base_stat,props.pokemon.stats[5].base_stat]
    let num =0;
    const types = props.pokemon.types
    const typesList = types?.map((type) => {
        let Tcolor = colors[type.type.name]
        num++;
        return( 
            <View style={{backgroundColor: `${Tcolor}`,padding: '4%', borderBottomLeftRadius: '30', borderBottomRightRadius: '30', borderTopLeftRadius: '30', borderTopRightRadius: '30', alignItems: 'center'
            }}>
            <Text key={num}  style={{ backgroundColor: `${Tcolor}`, 
            }}>type {num}: {type.type.name}</Text>
        </View>
        )
    })
    const abilities = props.pokemon.abilities
    const showAbilities = abilities?.map((ability) => {
        
        return <Text className='pokemon-info'>ability: {ability.ability.name}</Text>
    
})


   
    return(
        
        <View>
        <View className='pokemon-image-container'>
            <Image source={{uri: props.pokemon.sprites?.front_default}} alt="pokemon" style={styles.image}/>
            
        </View>
            <Text style={styles.pokemonInfo} >Name: {props.pokemon.name}</Text>
            {/* {types()} */}
            <View style={styles.pokemonType}>
            {typesList} 
            </View>
            {showAbilities}
            <Text className='pokemon-info'>height: {props.pokemon.height}</Text>
            <Text className='pokemon-info'>weight: {props.pokemon.weight}</Text>
            <Chart data={stats} />


        </View>
    )
    
}

const styles = StyleSheet.create({
    /* Styling for the Pokemon image container */
 'pokemon-image-container': {
    position: 'relative',
    width: '100%',
    height: '100%'
},
/* Styling for the Pokemon image */'image': {
    width: 200,
    height: 200,
},
 pokemonInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

 },
 pokemonType: {
    flexDirection: 'row',
    color: `black`,
    // borderRadius: '20pt',
    // fontSize: '14pt',
    textTransform: 'uppercase',
    padding: '2%', borderBottomLeftRadius: '30'
  }
}
)

export default Details;
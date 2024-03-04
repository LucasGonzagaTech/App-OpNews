import React from "react";
import {Text, SafeAreaView} from "react-native";
import estilos from "./estilos";


export default () => {
    return(
        <SafeAreaView style={estilos.Titulo}>
            <Text style={estilos.Titulo}>One Piece News</Text>
            <Text style={estilos.Titulo}>Notícias dos capítulos do mangá de one piece</Text>
        </SafeAreaView>
    ) 
}
import React from "react";
import {View, StyleSheet} from "react-native";
import Janela from "./components/Janela";
import NoticiaOne from "./components/NoticiaOne";
import NoticiaTwo from "./components/NoticiaTwo";
import Rodape from "./components/Rodape";
import estilos from "./components/estilos";

export default () => {
    return (
        <View style={estilos.Body} >
           <Janela/>
           <NoticiaOne/>
           <NoticiaTwo/>
           <Rodape/>
        </View>
    )   
};
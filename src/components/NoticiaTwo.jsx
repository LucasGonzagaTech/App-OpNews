import React from "react";
import {View, Image, Text} from "react-native";
import estilos from "./estilos";
import img from "../img/download.png"

export default () => {
    return(
        <View>
                <Text>Nova Recompensa de Luffy</Text>
               <Image style={estilos.AlignImage} source={img} />
        </View>
    )
};
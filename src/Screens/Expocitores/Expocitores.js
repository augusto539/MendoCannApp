// React
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Image, FlatList } from 'react-native';
// Kitten UI
import { Text, Divider, Icon } from '@ui-kitten/components';
// Componentes
import BotonDiamante from './BotonesExpocitores/Diamante';
import BotonOro from './BotonesExpocitores/Oro';
import BotonPlata from './BotonesExpocitores/Plata';
// data
import info from '../../../assets/data/Expocitores/Expocitores'

const ExpocitoresScreen = ({ navigation }) => {
    const Medicinal = info.filter((disertante) => disertante.sector == '  Medicinal')
    const IndustriaCultivo = info.filter((disertante) => disertante.sector == '  Industria y cultivo')

    // botones
    const [BotonMedicinal, SetBotonMedicinal] = useState(true);
    const [BotonIndustria, SetBotonIndustria] = useState(true);

    const [Data, SetData] = useState(info);


    useEffect(() => {
        if (BotonMedicinal == true && BotonIndustria == true) {
            SetData(info)
        }
        if (BotonMedicinal == false && BotonIndustria == true) {
            SetData(IndustriaCultivo)
        }
        if (BotonMedicinal == true && BotonIndustria == false) {
            SetData(Medicinal)
        }
        if (BotonMedicinal == false && BotonIndustria == false) {
            SetData(null)
        }
        // data filtrada
        const nuevoOrden = Data.sort(function (a, b) {
            if (a.puntaje < b.puntaje) {
                return 1;
            }
            if (a.puntaje > b.puntaje) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });

        SetData(nuevoOrden)
    }, [BotonMedicinal, BotonIndustria]);



    return (
        <View style={styles.pageContainer}>

            {/* <View style={styles.controles}>
                <Pressable
                    onPress={() => SetBotonMedicinal(!BotonMedicinal)}
                    style={({ pressed }) => {
                        if (BotonMedicinal) {
                            return ([styles.controlesBoton, styles.controlesBotonClicked])
                        } else {
                            return (styles.controlesBoton)
                        }
                    }}
                >
                    <Text style={[styles.texto, styles.nombre]}>
                        Medicinal
                    </Text>

                </Pressable>
                <Pressable
                    onPress={() => SetBotonIndustria(!BotonIndustria)}
                    style={({ pressed }) => {
                        if (BotonIndustria) {
                            return ([styles.controlesBoton, styles.controlesBotonClicked])
                        } else {
                            return (styles.controlesBoton)
                        }
                    }}
                >
                    <Text style={[styles.texto, styles.nombre]}>
                        Industria
                    </Text>

                </Pressable>
            </View> */}


            <FlatList
                style={styles.lista}
                data={Data}
                renderItem={({ item }) => {
                    if (item.stand == 'Diamante') {
                       return(<BotonDiamante data={item} navigation={navigation} />  )  
                    }
                    if (item.stand == 'Oro') {
                        return(<BotonOro data={item} navigation={navigation} />  )  
                    }
                    if (item.stand == 'Plata') {
                        return(<BotonPlata data={item} navigation={navigation} />  )  
                    }
            }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'colum',
        flexWrap: "wrap",
        flex: 1,
        // backgroundColor: '#FFFFFF',
        backgroundColor: '#C0EA6A',
    },
    controles: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    controlesBoton: {
        height: 50,
        width: '45%',
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A3330',
        shadowColor: "#2A3330",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.23,
        shadowRadius: 11.27,
        elevation: 20
    },
    controlesBotonClicked: {
        elevation: 2,
        backgroundColor: '#FFFFFF',
    },
    lista: {
        width: '100%',
    },
    texto: {
        // color: '#2A3330',
        color: 'black',
    },
    nombre: {
        fontSize: 30,
        fontWeight: 800
    },
});


export default ExpocitoresScreen;
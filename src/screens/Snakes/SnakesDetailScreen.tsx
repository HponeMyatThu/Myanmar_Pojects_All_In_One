import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import SnakesDetail from "../../components/Snakes/SnakesDetail";

const SnakesDetailScreen = () => {
    const snakes = useAppSelector((state) => state.snake);
    return (
        <SnakesDetail propsData={snakes} />
    )

};

export default SnakesDetailScreen;

const styles = StyleSheet.create({});

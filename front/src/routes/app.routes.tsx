import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import Dashboard from "../screens/Dashboard";
import Order from "../screens/Order";
import FinishOrder from "../screens/FinishOrder";

// Definindo os tipos de rotas
export type StackParamList = {
    Dashboard: undefined;
    Order: {
        number: number | string;
        order_id: string;
    };
    FinishOrder: {
        number: number | string,
        order_id: string;
    };
}

const Stack = createStackNavigator<StackParamList>();

function AppRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Order"
                component={Order}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="FinishOrder"
                component={FinishOrder}
                options={{
                    title:"finalizando",
                    headerStyle: {
                        backgroundColor: '#1d1d2e',
                    },
                    headerTintColor: '#FFF',
                }}
            />
        </Stack.Navigator>
    );
}

export default AppRoutes;
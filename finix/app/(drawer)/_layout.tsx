import { Drawer } from 'expo-router/drawer';
import * as React from 'react';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: '#121212' },
        drawerActiveTintColor: '#d9d9d9',
        drawerInactiveTintColor: '#d9d9d9',
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#d9d9d9',
        headerTitle: '', // Oculta o nome da tela
      }}
    />
  );
}

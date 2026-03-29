import { tabs } from "@/constants/data"
import { colors, components } from '@/constants/theme'
import { Tabs } from "expo-router"
import React from "react"
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

const tabBar = components.tabBar;

const TabIcon = ({ focused, icon, size }: { focused: boolean; icon: ImageSourcePropType; size: number }) => {
    return (
        <View style={[styles.iconContainer, { width: size, height: size }]}>
            <View
                style={[
                    styles.pill,
                    { width: size, height: size, borderRadius: size / 2 },
                    focused && { backgroundColor: colors.accent },
                ]}
            >
                <Image source={icon} style={{ width: size * 0.5, height: size * 0.5 }} resizeMode="contain" />
            </View>
        </View>
    )
}

const TabLayout = () => {
    const insets = useSafeAreaInsets()

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarItemStyle: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: tabBar.itemPaddingVertical,
                },
                tabBarIconStyle: {
                    width: tabBar.iconFrame,
                    height: tabBar.iconFrame,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} size={tabBar.iconFrame} />,
                    }}
                />
            ))}
        </Tabs>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    pill: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
})

export default TabLayout
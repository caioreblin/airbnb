import { View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'
import listingsData from '@/assets/data/airbnb-listings.json'
import ListingsMap from '@/components/ListingsMap'
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json'

const Page = () => {
    const [category, setCategory] = useState('Tiny homes');
    const items = useMemo(() => listingsData as any, []);
    const itemsGeo = useMemo(() => listingsDataGeo as any, []);

    const onDataChanged = (category: string) => {
        setCategory(category);
    }

    return (
        <View style={{ flex: 1, marginTop: 130 }}>
            <Stack.Screen
                options={{
                    header: () => <ExploreHeader onCategoryChanged={onDataChanged} />
                }}
            />
            {/* <Listings listings={items} category={category} /> */}
            <ListingsMap listings={itemsGeo} />
        </View>
    )
}

export default Page
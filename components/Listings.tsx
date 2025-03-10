import { View, FlatList, ListRenderItem, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'expo-router';
import { Listing } from '@/interfaces/listings';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

interface Props {
    listings: any[];
    category: string;
}

const Listings = ({ listings: items, category }: Props) => {
    const [loading, setLoading] = useState(true);
    const listRef = useRef<FlatList>(null);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, [category]);

    const renderRow: ListRenderItem<Listing> = ({ item }) => (
        <Link href={`/listing/${item.id}`} asChild>
            <TouchableOpacity>
                <Animated.View style={styles.listing} entering={FadeInRight} exiting={FadeOutLeft}>
                    <Image
                        source={{ uri: item.medium_url }}
                        style={styles.listingImage}
                    />
                    <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
                        <Ionicons name="heart-outline" size={24} color={"#000"} />
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontFamily: 'mon-sb', fontSize: 16 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', gap: 4 }}>
                            <Ionicons name="star" size={16} />
                            <Text style={{ fontFamily: 'mon-sb' }}>{item.review_scores_rating / 20}</Text>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'mon' }}>{item.room_type}</Text>

                    <View style={{ flexDirection: 'row', gap: 4 }}>
                        <Text style={{ fontFamily: 'mon-sb' }}>${item.price}</Text>
                        <Text style={{ fontFamily: 'mon' }}>night</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </Link>
    );

    return (
        <View>
            <FlatList
                renderItem={renderRow}
                ref={listRef}
                data={loading ? [] : items}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listing: {
        padding: 16,
        gap: 10,
        marginVertical: 16,
    },
    listingImage: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
});

export default Listings
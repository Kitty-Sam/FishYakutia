import React, { useCallback, useState } from 'react';
import { MediumText } from '~components/MediumText';
import { Logo } from '~components/Logo';
import { CategoriesContainer, CategoryContainer, CategoryText, SearchBar } from '~screens/MenuScreen/style';
import { Gap } from '~components/Gap';
import { FlatList } from 'react-native';
import { theme } from '~constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export const categories = [
    { id: 1, title: 'Все' },
    { id: 2, title: 'Категория 1' },
    { id: 3, title: 'Категория 2' },
    { id: 4, title: 'Категория 3' },
];

export const MenuScreen = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const renderCategoryItem = useCallback(
        ({ item }: { item: { id: number; title: string } }) => (
            <CategoryContainer
                style={{
                    backgroundColor: category === item.title ? theme.CHOSEN_CATEGORY_COLOR : theme.CATEGORY_COLOR,
                }}
                onPress={onCategoryPress(item)}
            >
                <CategoryText>{item.title}</CategoryText>
            </CategoryContainer>
        ),
        [category],
    );

    const onCategoryPress = (item: { id: number; title: string }) => async () => {
        setCategory(item.title);
        if (item.title === 'Все') {
            // dispatch(setFavoriteFilteredFoods([]));
        } else {
            // await filterFavoriteFoodByCategory({ categoryId: item.id, userId: currentUser!.id }).unwrap();
        }
    };

    return (
        <SafeAreaView>
            <Logo />
            <MediumText>Меню</MediumText>
            <Gap scale={2} />
            <SearchBar value={search} onChangeText={setSearch} placeholder="Быстрый поиск" />
            <CategoriesContainer>
                <FlatList
                    initialNumToRender={10}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment="center"
                    data={categories}
                    renderItem={renderCategoryItem}
                />
            </CategoriesContainer>
        </SafeAreaView>
    );
};

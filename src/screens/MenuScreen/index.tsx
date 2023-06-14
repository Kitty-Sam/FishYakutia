import React, { useCallback, useState } from 'react';
import { Logo } from '~components/Logo';
import {
    CategoriesContainer,
    CategoryContainer,
    CenteredView,
    FoodContainer,
    FoodImage,
    FoodItemContainer,
    LeftMarginBlock,
    PriceContainer,
    RootContainer,
    SearchBar,
} from '~screens/MenuScreen/style';
import { Gap } from '~components/Gap';
import { FlatList } from 'react-native';
import { theme } from '~constants/theme';
import { RegularText } from '~components/RegularText';
import { useGetAllCategoriesQuery, useGetAllFoodsQuery } from '~store/api/foodApi';
import { IFood } from '~store/slices/foodSlice';
import { SquareButton } from '~components/SquareButton';

export const MenuScreen = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const { data: allFoods } = useGetAllFoodsQuery();
    const { data: categories } = useGetAllCategoriesQuery();

    const onAddFoodPositionPress = (id: number) => () => {
        console.log('id food', id);
    };

    const renderCategoryItem = useCallback(
        ({ item }: { item: { id: number; title: string } }) => (
            <CategoryContainer
                style={{
                    backgroundColor: category === item.title ? theme.CHOSEN_CATEGORY_COLOR : theme.CATEGORY_COLOR,
                }}
                onPress={onCategoryPress(item)}
            >
                <RegularText color={theme.BUTTON_TEXT_COLOR} fontFamily="Montserrat-Regular" fontSize={12}>
                    {item.title}
                </RegularText>
            </CategoryContainer>
        ),
        [category],
    );

    const renderFoodItem = useCallback(
        ({ item }: { item: IFood }) => (
            <FoodItemContainer>
                <FoodImage source={{ uri: item.image }} />
                <Gap scale={1} />
                <RegularText color={theme.PRIMARY_COLOR} fontSize={16} fontFamily="Montserrat-SemiBold">
                    {item.name}
                </RegularText>
                <Gap scale={1} />
                <RegularText color={theme.PLACEHOLDER} fontSize={12} fontFamily="Montserrat-Regular">
                    цена за 1 кг
                </RegularText>
                <Gap scale={1.5} />
                <PriceContainer>
                    <RegularText color={theme.PRIMARY_COLOR} fontSize={20} fontFamily="Montserrat-Bold">
                        {item.price} R
                    </RegularText>
                    <SquareButton title="+" onPress={onAddFoodPositionPress(item.id)} />
                </PriceContainer>
            </FoodItemContainer>
        ),
        [],
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
        <RootContainer>
            <LeftMarginBlock>
                <CenteredView>
                    <Logo />
                </CenteredView>
                <Gap scale={1.5} />
                <RegularText color={theme.PRIMARY_COLOR} fontFamily="Montserrat-Medium" fontSize={32}>
                    Меню
                </RegularText>

                <Gap scale={1.5} />
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
            </LeftMarginBlock>
            <FoodContainer>
                <FlatList
                    // data={filteredFoods.length ? filteredFoods : allFoods}
                    data={allFoods}
                    renderItem={renderFoodItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                />
            </FoodContainer>
        </RootContainer>
    );
};

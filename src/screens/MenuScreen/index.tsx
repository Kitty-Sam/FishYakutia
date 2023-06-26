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
import { FlatList, Platform } from 'react-native';
import { theme } from '~constants/theme';
import { RegularText } from '~components/RegularText';
import { useFilterFoodByCategoryIdMutation, useGetAllCategoriesQuery, useGetAllFoodsQuery } from '~store/api/foodApi';
import { addBadgeCount, IFood, setFilteredFoods } from '~store/slices/foodSlice';
import { SquareButton } from '~components/Buttons/SquareButton';
import { getAllCategories, getAllFoods, getFilteredFoods } from '~store/selectors';
import { useAppDispatch, useAppSelector } from '~store/store';
import { addOrderItem } from '~store/slices/basketSlice';

export const MenuScreen = () => {
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');

    const [filterFoodByCategoryId] = useFilterFoodByCategoryIdMutation();

    useGetAllFoodsQuery();
    useGetAllCategoriesQuery();

    const allFoods = useAppSelector(getAllFoods);
    const categories = useAppSelector(getAllCategories);
    const filteredFoods = useAppSelector(getFilteredFoods);

    const dispatch = useAppDispatch();

    const onAddFoodPositionPress = (foodId: number, foodImage: string, foodPrice: string, foodName: string) => () => {
        dispatch(addBadgeCount());
        dispatch(addOrderItem({ orderItem: { foodId, foodCount: 1, foodImage, foodPrice, foodName } }));
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
                        {item.price} ₽
                    </RegularText>
                    <SquareButton
                        title="+"
                        onPress={onAddFoodPositionPress(item.id, item.image, item.price, item.name)}
                    />
                </PriceContainer>
            </FoodItemContainer>
        ),
        [],
    );

    const onCategoryPress = (item: { id: number; title: string }) => async () => {
        setCategory(item.title);
        if (item.title === 'Все') {
            dispatch(setFilteredFoods([]));
        } else {
            await filterFoodByCategoryId({ categoryId: item.id }).unwrap();
        }
    };

    return (
        <RootContainer>
            <LeftMarginBlock>
                <CenteredView>
                    {Platform.OS === 'android' && <Gap scale={0.5} />}
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
                    data={filteredFoods.length ? filteredFoods : allFoods}
                    renderItem={renderFoodItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                />
            </FoodContainer>
        </RootContainer>
    );
};

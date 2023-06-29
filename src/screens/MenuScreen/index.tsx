import React, { useCallback, useEffect, useState } from 'react';
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
} from '~screens/MenuScreen/style';
import { Gap } from '~components/Gap';
import { FlatList, Platform } from 'react-native';
import { theme } from '~constants/theme';
import { RegularText } from '~components/RegularText';
import { useCommonFilterFoodMutation, useGetAllCategoriesQuery, useGetAllFoodsQuery } from '~store/api/foodApi';
import { addBadgeCount, IFood, setFilteredFoods } from '~store/slices/foodSlice';
import { SquareButton } from '~components/Buttons/SquareButton';
import { getAllCategories, getFilteredFoods, getModalType } from '~store/selectors';
import { useAppDispatch, useAppSelector } from '~store/store';
import { addOrderItem } from '~store/slices/basketSlice';
import { CustomModal } from '~components/CustomModal';

import { Match } from '~components/Modals/Match';
import { useSearch } from '~hooks/useSearch';
import { SearchBar } from '~components/SearchBar';
import { serverUrl } from '~constants/baseURL';

export const MenuScreen = () => {
    const [category, setCategory] = useState<{ id: number; title: string }>({ id: 0, title: 'Все' });

    const { data: allFoods } = useGetAllFoodsQuery();
    useGetAllCategoriesQuery();

    const filteredFoods = useAppSelector(getFilteredFoods);
    const modalType = useAppSelector(getModalType);
    const categories = useAppSelector(getAllCategories);

    const { search, setSearch, filterBySearch } = useSearch(category?.id);

    const [commonFilterFood] = useCommonFilterFoodMutation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!search) {
            dispatch(setFilteredFoods([]));
        }
    }, [search]);

    const onAddFoodPositionPress = (foodId: number, foodImage: string, foodPrice: string, foodName: string) => () => {
        dispatch(addBadgeCount());
        dispatch(addOrderItem({ orderItem: { foodId, foodCount: 1, foodImage, foodPrice, foodName } }));
    };

    const renderCategoryItem = useCallback(
        ({ item }: { item: { id: number; title: string } }) => (
            <CategoryContainer
                style={{
                    backgroundColor:
                        category?.title === item.title ? theme.CHOSEN_CATEGORY_COLOR : theme.CATEGORY_COLOR,
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

    const renderFoodItem = useCallback(({ item }: { item: IFood }) => {
        const imageUrl = `${serverUrl}/${item.images[0].path}`;
        return (
            <FoodItemContainer>
                <FoodImage source={{ uri: imageUrl }} />
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
                        onPress={onAddFoodPositionPress(item.id, item.images[0].path, item.price, item.name)}
                    />
                </PriceContainer>
            </FoodItemContainer>
        );
    }, []);

    const onCategoryPress = (item: { id: number; title: string }) => async () => {
        setCategory(item);
        if (item.title === 'Все') {
            dispatch(setFilteredFoods([]));
        } else {
            await commonFilterFood({ categoryId: item.id, title: '' }).unwrap();
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

                <SearchBar search={search} setSearch={setSearch} filterHandler={filterBySearch} />

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

            {modalType === 'match' && (
                <CustomModal>
                    <Match />
                </CustomModal>
            )}
        </RootContainer>
    );
};

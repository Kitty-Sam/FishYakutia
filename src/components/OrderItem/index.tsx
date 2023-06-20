import React, { FC } from 'react';
import { ColumnContainer, FoodImage, OrderItemContainer, RowContainer } from '~components/OrderItem/style';
import { SquareButton } from '~components/SquareButton';
import { useAppDispatch } from '~store/store';
import { addOrderItem, removeOrderItem } from '~store/slices/basketSlice';
import { addBadgeCount, removeBadgeCount } from '~store/slices/foodSlice';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { RoundButton } from '~components/RoundButton';

interface IOrderItem {
    food: {
        foodId: number;
        foodCount: number;
        foodImage: string;
        foodPrice: string;
        foodName: string;
    };
}
export const OrderItem: FC<IOrderItem> = ({ food }) => {
    const { foodId, foodCount, foodImage, foodPrice, foodName } = food;

    const dispatch = useAppDispatch();

    const onAddFoodCountPress = (foodId: number, foodCount: number) => () => {
        dispatch(addOrderItem({ orderItem: { foodId, foodCount, foodImage, foodPrice, foodName } }));
        dispatch(addBadgeCount());
    };

    const onRemoveFoodCountPress = (foodId: number, foodCount: number) => () => {
        dispatch(removeOrderItem({ orderItem: { foodId, foodCount } }));
        dispatch(removeBadgeCount());
    };

    return (
        <OrderItemContainer>
            <FoodImage source={{ uri: foodImage }} />
            <ColumnContainer>
                <RegularText color={theme.SECONDARY_COLOR} fontSize={13} fontFamily="Montserrat-Regular">
                    {foodName}
                </RegularText>
                <RegularText color={theme.BUTTON_COLOR} fontSize={12} fontFamily="Montserrat-Regular">
                    {foodPrice} RUB
                </RegularText>
            </ColumnContainer>

            <RowContainer>
                <RoundButton title={'-'} onPress={onRemoveFoodCountPress(foodId, foodCount)} />
                <RegularText color={theme.SECONDARY_COLOR} fontSize={14} fontFamily="Montserrat-Regular">
                    {foodCount}
                </RegularText>
                <RoundButton title={'+'} onPress={onAddFoodCountPress(foodId, foodCount)} />
            </RowContainer>
        </OrderItemContainer>
    );
};

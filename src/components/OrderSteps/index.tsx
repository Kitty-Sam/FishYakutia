import React, { FC } from 'react';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { ColumnContainer, Line, Round, RowContainer } from '~components/OrderSteps/style';

export interface IOrdersProps {
    orderColor: string;
    orderBgColor: string;
    detailsColor: string;
    detailsBgColor: string;
}

export const OrderSteps: FC<IOrdersProps> = ({ orderColor, orderBgColor, detailsBgColor, detailsColor }) => {
    return (
        <RowContainer>
            <ColumnContainer>
                <RegularText color={orderColor} fontSize={11} fontFamily="Montserrat-Regular">
                    Заказ
                </RegularText>
                <Round bgColor={orderBgColor}>
                    <RegularText color={theme.WHITE} fontSize={11} fontFamily="Montserrat-Regular">
                        1
                    </RegularText>
                </Round>
            </ColumnContainer>
            <Line />
            <ColumnContainer>
                <RegularText color={detailsColor} fontSize={11} fontFamily="Montserrat-Regular">
                    Детали
                </RegularText>
                <Round bgColor={detailsBgColor}>
                    <RegularText color={theme.WHITE} fontSize={11} fontFamily="Montserrat-Regular">
                        2
                    </RegularText>
                </Round>
            </ColumnContainer>
        </RowContainer>
    );
};

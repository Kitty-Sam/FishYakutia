import React, { FC } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { theme } from '~constants/theme';
import { paymentMethods } from '~constants/paymentMethods';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '~components/Select/style';
import { Container } from '~components/InputWithLabel/style';
import { RegularText } from '~components/RegularText';
import { Gap } from '~components/Gap';
import { ISelect } from '~components/Select/type';

export const Select: FC<ISelect> = ({ setPaymentMethod, label }) => {
    return (
        <Container>
            <RegularText color={theme.SECONDARY_COLOR} fontSize={13} fontFamily="Montserrat-Regular">
                {label}
            </RegularText>
            <Gap scale={0.5} />
            <SelectDropdown
                data={paymentMethods}
                onSelect={(selectedItem) => {
                    setPaymentMethod!(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem;
                }}
                rowTextForSelection={(item) => {
                    return item;
                }}
                defaultButtonText={paymentMethods[0]}
                renderDropdownIcon={(isOpened) => {
                    return (
                        <Icon
                            name={isOpened ? 'md-chevron-up' : 'md-chevron-down'}
                            color={theme.SECONDARY_COLOR}
                            size={18}
                        />
                    );
                }}
                dropdownIconPosition={'right'}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={styles.buttonTextStyle}
                dropdownStyle={styles.dropdownStyle}
                rowTextStyle={styles.rowTextStyle}
            />
        </Container>
    );
};

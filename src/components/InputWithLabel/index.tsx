import React, { FC } from 'react';
import { Container, CustomTextInput, styles } from '~components/InputWithLabel/style';
import { RegularText } from '~components/RegularText';
import { theme } from '~constants/theme';
import { Gap } from '~components/Gap';
import MaskInput from 'react-native-mask-input';

export interface IInputWithLabel {
    label: string;
    placeholder: string;
    onChangeText: (value: string) => void;
    onBlur: (e: any) => void;
    value: string;
    hasPhone?: boolean;
}

export const InputWithLabel: FC<IInputWithLabel> = ({
    label,
    placeholder,
    onChangeText,
    onBlur,
    value,
    hasPhone = false,
}) => {
    return (
        <Container>
            <RegularText color={theme.SECONDARY_COLOR} fontSize={13} fontFamily="Montserrat-Regular">
                {label}
            </RegularText>
            <Gap scale={0.5} />
            {hasPhone ? (
                <MaskInput
                    style={styles.phoneInputWIthMask}
                    placeholder="(+7)"
                    placeholderTextColor={theme.PRIMARY_COLOR}
                    value={value}
                    onChangeText={onChangeText}
                    mask={['(', '+', '7', ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                />
            ) : (
                <CustomTextInput
                    placeholder={placeholder}
                    multiline
                    placeholderTextColor={theme.PLACEHOLDER}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                />
            )}
        </Container>
    );
};

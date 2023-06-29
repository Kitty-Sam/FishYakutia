import React, { FC, useState } from 'react';
import { InputWithLabel } from '~components/InputWithLabel';
import { Gap } from '~components/Gap';
import { AppButton } from '~components/Buttons/Button';
import { Formik } from 'formik';
import { paymentMethods } from '~constants/paymentMethods';
import { Select } from '~components/Select';
import { setModalType } from '~store/slices/modalSlice';
import { useAppDispatch } from '~store/store';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { CenteredContainer } from '~components/Form/style';
import { IForm } from '~components/Form/type';

export const Form: FC<IForm> = ({ onOrderPress }) => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={{ name: '', phone: '', address: '', comment: '' }}
            onSubmit={(values) => {
                if (!values.name || !values.phone || !values.address) {
                    dispatch(setModalType({ type: 'error' }));
                    return;
                }
                onOrderPress(values.name, values.phone, values.address, values.comment, paymentMethod);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <CenteredContainer>
                            <InputWithLabel
                                label="Имя"
                                placeholder="Name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <InputWithLabel
                                label="Телефон"
                                placeholder="Phone"
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                hasPhone
                            />
                            <InputWithLabel
                                label="Адрес доставки"
                                placeholder="Address"
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                            />
                            <Select setPaymentMethod={setPaymentMethod} label={'Оплата'} />
                            <InputWithLabel
                                label="Примечание"
                                placeholder="Comment"
                                onChangeText={handleChange('comment')}
                                onBlur={handleBlur('comment')}
                                value={values.comment}
                            />
                            <Gap scale={2} />
                            <AppButton title="Оформить" onPress={handleSubmit} />
                        </CenteredContainer>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            )}
        </Formik>
    );
};

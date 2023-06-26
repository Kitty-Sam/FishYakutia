import React, { FC, useState } from 'react';
import { InputWithLabel } from '~components/InputWithLabel';
import { Gap } from '~components/Gap';
import { AppButton } from '~components/Buttons/Button';
import { ScrollView } from 'react-native';
import { Formik } from 'formik';
import { paymentMethods } from '~constants/paymentMethods';
import { Select } from '~components/Select';

export interface IForm {
    onOrderPress: (name: string, phone: string, address: string, comment: string, paymentMethod: string) => void;
}

export const Form: FC<IForm> = ({ onOrderPress }) => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

    return (
        <Formik
            initialValues={{ name: '', phone: '', address: '', comment: '' }}
            onSubmit={(values) => {
                if (!values.name || values.phone || !values.address) {
                }
                onOrderPress(values.name, values.phone, values.address, values.comment, paymentMethod);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <ScrollView contentContainerStyle={{ alignItems: 'center' }} showsVerticalScrollIndicator={false}>
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
                </ScrollView>
            )}
        </Formik>
    );
};
import * as Yup from 'yup';
export const formSchema = Yup.object().shape({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    address: Yup.string().required(),
    comment: Yup.string().required(),
});

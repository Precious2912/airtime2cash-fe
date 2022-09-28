import * as yup from "yup";

export const WithdrawSchema = yup.object().shape({
    amount: yup.number().required("Amount is required"),
    accountName: yup.string().required("Account Name is required"),
    accountNumber: yup.string().required("Account Number is required"),
    bank: yup.string().required("Bank Name is required"),
    password: yup.string().required("Password is required"),
});
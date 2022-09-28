import * as yup from "yup"

export const sellAirtimeSchema = yup.object().shape({
    Network:yup.string().required(),
    PhoneNumber:yup.number().required(),
    AmountToSell:yup.number().required(),
    USSD:yup.string().required(),
    AmountToReceieve:yup.number().required(),
    DestinationPhoneNumber:yup.number().required()
})


export const AddBankSchema = yup.object().shape({
  bankName: yup
    .object()
    .shape({
      label: yup.string().required("bank is required (from label)"),
      value: yup.string().required("bank is required"),
    })
    .nullable() // for handling null value when clearing options via clicking "x"
    .required("Bank is required"),
  accountName: yup.string().required(),
  accountNumber: yup.string().required(),
});
import * as yup from "yup"

export const sellAirtimeSchema = yup.object().shape({
    PhoneNumber:yup.number().required(),
    AmountToSell:yup.number().required(),
    USSD:yup.string().required(),
    AmountToReceieve:yup.number().required(),
    DestinationPhoneNumber:yup.number().required()
})
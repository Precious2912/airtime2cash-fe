export const CustomStyles = {
  control: (base) => ({
    ...base,
    borderRadius: 0,
    minHeight: 48,
    marginBottom: 15,
    marginTop: 10,
    fontSize: 13,
    "&:hover": {
      borderColor: "#de3d6d",
    },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
  clearIndicator: (base) => ({
    ...base,
    padding: 4,
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0px 10px",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
  }),
};
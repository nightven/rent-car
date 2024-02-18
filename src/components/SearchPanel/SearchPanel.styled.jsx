import Select from "react-select";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid var(--primary-blue);
  border-radius: 14px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    gap: 18px;
    margin-bottom: 50px;
    padding: 10px 260px;
  }
  label {
    position: relative;
    display: flex;
    width: 100%;
    height: 44px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 14px;
    background: #f7f7fb;
    @media screen and (min-width: 768px) {
      width: 224px;
      height: 48px;
      &:not(:first-child) {
        width: 125px;
      }
    }
    @media screen and (min-width: 1440px) {
    }
  }
  
  
`;
export const StyledSelect = styled(Select)`
  width: 100%;
  padding: 18px;
`;

export const customStyles = {
  control: (provided) => ({
    ...provided,
    border: "none",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#F7F7FB",
  }),
  option: (provided, state) => ({
    ...provided,
    width: "100%", // Змінено з "224px" на "100%"
    height: "40px",
    borderColor: state.isSelected ? "#F7F7FB" : "#fff",
    backgroundColor: "#F7F7FB",
    color: state.isSelected ? "#000" : "rgba(18, 20, 23, 0.20)",
  }),
  menu: (provided) => ({
    ...provided,
    width: "100%",
    marginLeft: "-16px",
    marginRight: "-16px",
    borderRadius: "14px",
    overflow: "hidden",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: 0,
    marginRight: "-4px",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};
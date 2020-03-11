import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { default as StyledDatePicker } from "react-datepicker";
import { format } from "date-fns";
import Icon from "../Icon";

const HeaderContainer = styled.div`
  position: ${props => props.ps ? props.ps : "relative"};
  padding: 20px 16px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Calendar = props => {
  return (
      <>
          <StyledDatePicker
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled
            }) => (
                <HeaderContainer>
                  <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                    <Icon name="chevron-left" size={24} fillColor="black50" />
                  </button>
                  <h1 style={{ margin: 0 }}>{format(date, "MMMM")}</h1>
                  <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                    <Icon name="chevron-right" size={24} fillColor="black50" />
                  </button>
                </HeaderContainer>
              )}
            disabledKeyboardNavigation
            className={"input-field"}
            dateFormat="iii, dd MMM yyyy"
            inline
            {...props}
          />
      </>
  );
};

Calendar.displayName = "Calendar";
export default Calendar;

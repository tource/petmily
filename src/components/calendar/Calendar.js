import styled from "@emotion/styled";
import moment from "moment";
import { useEffect, useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendar.css";
import SimpleModal from "./SimpleModal";
import useModal from "../../hooks/UseModal";
import axios from "axios";

export const StyledCalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  .react-calendar {
    border: 0;
    height: 100%;
    padding: 30px;
    width: 100%;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 12px 0px;
    background-color: rgb(255, 255, 255);
    margin-right: 30px;
  }
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top || "50%"};
  left: ${props => props.left || "50%"};
  transform: translate(-50%, 0%);
`;

const Title = styled.h2`
  background-color: #ffd9d9;
  max-width: 100%;
  padding: 0 5px;
  font-size: 0.7rem;
`;

const Calendar = () => {
  const { isModalOpen, confirmAction, openModal, closeModal } = useModal();
  const [modalPosition, setModalPosition] = useState({});
  const [clickDay, setClickDay] = useState("");
  const [findEventDay, setFindEventDay] = useState(null);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/calendar/user_id?user_id=12");
        setAllData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const onClickDay = (value, event) => {
    const checkDay = moment(value).format("YYYY-MM-DD");
    const findeEvent = allData.find(
      item => moment(item.startDate).format("YYYY-MM-DD") === checkDay,
    );

    setFindEventDay(findeEvent);
    setClickDay(checkDay);

    const target = event.target.closest(".react-calendar__tile");
    if (target) {
      const rect = target.getBoundingClientRect();
      const calendarRect = target
        .closest(".react-calendar")
        .getBoundingClientRect();
      const x = rect.left + rect.width / 2 - calendarRect.left;
      const y = rect.top + rect.height - calendarRect.top + 10;
      setModalPosition({ top: `${y}px`, left: `${x}px` });

      openModal({
        onConfirm: closeModal,
      });
    }
  };

  const tileContent = ({ date }) => {
    const checkDay = moment(date).format("YYYY-MM-DD");
    const dayResult = allData.filter(
      item => moment(item.startDate).format("YYYY-MM-DD") === checkDay,
    );
    if (dayResult.length > 0) {
      return (
        <div>
          {dayResult.slice(0, 2).map(item => (
            <Title key={item.pk} style={{ backgroundColor: "#ffd9d9" }}>
              {item.title}
            </Title>
          ))}
          {dayResult.length > 2 && (
            <Title
              style={{
                backgroundColor: "transparent",
                color: "#015DE7",
                textAlign: "right",
                fontSize: "0.6rem",
                padding: "0",
              }}
            >
              view more
            </Title>
          )}
        </div>
      );
    }
  };

  return (
    <StyledCalendarWrapper>
      <ReactCalendar
        calendarType="gregory"
        showNeighboringMonth={false}
        next2Label={null}
        prev2Label={null}
        minDetail="year"
        formatDay={(locale, date) => moment(date).format("D")}
        formatMonthYear={(locale, date) => moment(date).format("M월 YYYY")}
        tileContent={tileContent}
        onClickDay={onClickDay}
      />
      {isModalOpen && (
        <ModalWrapper top={modalPosition.top} left={modalPosition.left}>
          <SimpleModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onConfirm={confirmAction}
            clickDay={clickDay}
            findEventDay={findEventDay}
          />
        </ModalWrapper>
      )}
    </StyledCalendarWrapper>
  );
};

export default Calendar;

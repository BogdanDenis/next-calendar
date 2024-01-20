import { useCallback, useState } from 'react';
import moment from 'moment';

import {
  CALENDAR_FORMATS,
  DAYS_PER_WEEK,
} from '../constants';



export const useCalendar = ({ weeks, viewedDate }) => {
  const [currentDate, setCurrentDate] = useState(viewedDate);

  const CALENDAR_FORMATTERS = {
    [CALENDAR_FORMATS.LIST]: days => days,
    [CALENDAR_FORMATS.WEEKS]: days => {
      const weeksArray = new Array(weeks)
        .fill(null)
        .map((_item, index) => {
          const startIndex = index * DAYS_PER_WEEK;
          const endIndex = startIndex + DAYS_PER_WEEK;

          const daysOfWeek = days.slice(startIndex, endIndex);

          return daysOfWeek;
        });

      return weeksArray;
    },
  };

  const getCalendarDays = ({ calendarFormat = CALENDAR_FORMATS.LIST }) => {
    const totalDaysInTable = weeks * DAYS_PER_WEEK;
    
    const firstDayOfMonth = moment(currentDate).startOf('month');
    const whichDayOfWeek = firstDayOfMonth.day();
    const howManyDaysToPrepend = whichDayOfWeek - 1;

    const days = new Array(totalDaysInTable)
      .fill(null)
      .map((_item, index) => {
        if (index < howManyDaysToPrepend) {
          return moment(firstDayOfMonth).subtract(howManyDaysToPrepend - index, 'days');
        } else {
          return moment(firstDayOfMonth).add(index - howManyDaysToPrepend, 'days')
        }
      });

    const formatter = CALENDAR_FORMATTERS[calendarFormat] || CALENDAR_FORMATTERS[CALENDAR_FORMATS.LIST];

    return formatter(days);
  };

  const changeDate = useCallback((newDate) => {
    setCurrentDate(newDate);
  }, [setCurrentDate]);

  return {
    getCalendarDays,
    changeDate,
  };
};

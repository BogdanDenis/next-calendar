'use client';

import { useMemo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@mui/material';

const propTypes = {

};

const weeks = 5;
const daysPerWeek = 7;

const getDaysArray = (currentDate) => {
  const totalDaysInTable = weeks * daysPerWeek;
  
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

  return days;
}

const Calendar = () => {
  const days = useMemo(() => getDaysArray(), []);

  return (
    <Grid container spacing={0}>
      {days.map(day => ((
        <Grid
          key={day.format('YYYY-MM-DD')}
          item
          xl={12/daysPerWeek}
        >
          {day.format('YYYY-MM-DD')}
        </Grid>
      )))}
    </Grid>
  );
};

Calendar.propTypes = propTypes;

export { Calendar };

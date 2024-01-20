'use client';

import { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Grid, styled,
} from '@mui/material';

import { useCalendar } from './hooks';
import {
  CALENDAR_FORMATS,
  DAYS_PER_WEEK,
  WEEK_DAYS,
} from './constants';

const propTypes = {
  weeks: PropTypes.number,
};

const RowGrid = styled(Grid)({
  borderBottom: '1px solid #acacac',
});

const ItemGrid = styled(Grid)({
  borderRight: '1px solid #acacac',
  padding: '10px',
  minHeight: 80,
});

const Calendar = ({
  weeks = 5,
}) => {
  const calendar = useCalendar({ weeks, viewedDate: moment() });

  const calendarDays = useMemo(() => calendar.getCalendarDays({
    calendarFormat: CALENDAR_FORMATS.WEEKS,
  }), []);

  const header = useMemo(() => ((
    <RowGrid
      container
    >
      {WEEK_DAYS.map(dayName => ((
        <ItemGrid
          key={dayName}
          item
          xl={12/DAYS_PER_WEEK}
        >
          {dayName}
        </ItemGrid>
      )))}
    </RowGrid>
  )), []);

  const renderDay = (day) => ((
    <ItemGrid
      key={day.format('YYYY-MM-DD')}
      item
      xl={12/DAYS_PER_WEEK}
    >
      {day.get('date')}
    </ItemGrid>
  ));

  const renderWeek = (week) => ((
    <RowGrid
      key={week[0].format('YYYY-MM-DD')}
      container
      item
      spacing={0}
    >
      {week.map(renderDay)}
    </RowGrid>
  ));

  return (
    <Grid container spacing={0}>
      {header}
      <Grid container>
        {calendarDays.map(renderWeek)}
      </Grid>
    </Grid>
  );
};

Calendar.propTypes = propTypes;

export { Calendar };

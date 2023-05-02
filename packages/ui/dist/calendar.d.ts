import * as React from 'react';
import { DayPicker } from 'react-day-picker';

type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

export { Calendar, CalendarProps };

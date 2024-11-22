import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Theme,
    useTheme
} from '@mui/material';
import React from 'react';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        }
    }
}

export function getTimeIn12HourFormat(dateTimeString: string): string {
    const date: Date = new Date(dateTimeString);
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();
    const ampm: string = hours >= 12 ? 'PM' : 'AM';
    const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes: string =
        minutes < 10 ? '0' + minutes : minutes.toString();
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const MultipleSelectFieldChip = ({
    schedules,
    selectedScheduleIds,
    setSelectedScheduleIds }: any) => {
    const theme = useTheme();
    const handleChange = (event: SelectChangeEvent<typeof selectedScheduleIds>) => {
        const {
            target: { value },
        } = event;
        setSelectedScheduleIds(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    }

    return (
        <Box>
            <FormControl sx={{ width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                <Select
                    labelId='demo-multiple-chip-label'
                    id='demo-multiple-chip'
                    multiple
                    value={selectedScheduleIds}
                    onChange={handleChange}
                    input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
                    renderValue={(selected) => {
                        return (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value: any) => {
                                    const selectedSchedule = schedules.find(
                                        (schedule: any) => schedule.id === value
                                    );
                                    if (!selectedSchedule) return null;

                                    const formattedTimeSlot = `${getTimeIn12HourFormat(
                                        selectedSchedule.startDate
                                    )} - ${getTimeIn12HourFormat(
                                        selectedSchedule.endDate
                                    )}`;
                                    return (
                                        <Chip key={value} label={formattedTimeSlot} />
                                    )
                                })

                                }
                            </Box>
                        )
                    }}
                    MenuProps={MenuProps}
                >
                    {schedules.map((schedule: any) => (
                        <MenuItem
                            key={schedule.id}
                            value={schedule.id}
                            style={getStyles(schedule.id, selectedScheduleIds, theme)}
                        >
                            {`${getTimeIn12HourFormat(
                                schedule.startDate
                            )} - ${getTimeIn12HourFormat(schedule.endDate)}`}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default MultipleSelectFieldChip;
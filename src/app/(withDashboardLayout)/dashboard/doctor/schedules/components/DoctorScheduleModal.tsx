import PHModal from "@/components/shared/Modal/PHModal";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { useGetAllScheduleQuery } from "@/redux/api/ScheduleApi";
import { Stack } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import MultipleSelectFieldChip from "./MultipleSelectFieldChip";
import LoadingButton from "./LoadingButton";



type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
    const [selectedDate, setSelectedDate] = useState(
        dayjs(new Date()).toISOString()
    );

    const [selectedScheduleIds, setSelectedScheduleIds] = useState<string[]>([]);

    const query: Record<string, any> = {};

    if (!!selectedDate) {
        query['startDate'] = dayjs(selectedDate)
            .hour(0)
            .minute(0)
            .millisecond(0)
            .toISOString();
        query['endDate'] = dayjs(selectedDate)
            .hour(23)
            .minute(59)
            .millisecond(999)
            .toISOString();
    }

    const { data } = useGetAllScheduleQuery(query);
    const schedules = data?.schedules;

    const [createDoctorSchedule, { isLoading }] =
        useCreateDoctorScheduleMutation();
    console.log(selectedScheduleIds);
    const onSubmit = async () => {
        try {
            const res = await createDoctorSchedule({
                scheduleIds: selectedScheduleIds,
            });
            console.log(res);
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PHModal open={open} setOpen={setOpen} title='Create Doctor Schedule'>
            <Stack direction={'column'} gap={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label='Controlled picker'
                        value={dayjs(selectedDate)}
                        onChange={(newValue) =>
                            setSelectedDate(dayjs(newValue).toISOString())
                        }
                        sx={{ width: '100%' }}
                    />
                </LocalizationProvider>
                <MultipleSelectFieldChip
                    schedules={schedules}
                    selectedScheduleIds={selectedScheduleIds}
                    setSelectedScheduleIds={setSelectedScheduleIds}
                />

                <LoadingButton
                    size="small"
                    onClick={onSubmit}
                    loading={isLoading}
                    variant="contained"
                >
                    Submit
                </LoadingButton>

            </Stack>
        </PHModal>
    );
};

export default DoctorScheduleModal;
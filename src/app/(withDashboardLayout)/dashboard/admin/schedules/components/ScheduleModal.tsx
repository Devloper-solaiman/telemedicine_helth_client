import PHDatePicker from '@/components/Forms/PHdatePicar';
import PHForm from '@/components/Forms/PHForm';
import PHtimePicker from '@/components/Forms/PHtimePicker';
import PHModal from '@/components/shared/Modal/PHModal';
import { useCreateScheduleMutation } from '@/redux/api/ScheduleApi';
import { dateFormatter } from '@/utils/dateFormatter';
import { timeFormatter } from '@/utils/timeFormatter';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ScheduleModal = ({ open, setOpen }: TProps) => {
    const [createSchedule] = useCreateScheduleMutation()

    const handleFormSubmit = async (values: FieldValues) => {
        
        values.startDate = dateFormatter(values.startDate)
        values.endDate = dateFormatter(values.endDate)
        values.startTime = timeFormatter(values.startTime)
        values.endTime = timeFormatter(values.endTime)
        // console.log(values)
        try {
            const res = await createSchedule(values)
            console.log(res)
            if (res?.data?.length) {
                toast.success("Schedules Created successfully!")
                setOpen(false)
            }


        } catch (err: any) {
            console.error(err.message)
        }
    }
    return (
        <PHModal open={open} setOpen={setOpen} title='Create Submit'>
            <PHForm onSubmit={handleFormSubmit}>
                 <Grid container spacing={2} sx={{ width: "400px" }}> 
                    <Grid item md={12}>
                        <PHDatePicker name='startDate' label='Start Date' />
                    </Grid>
                     <Grid item md={12}>
                        <PHDatePicker name='endDate' label='End Date' />
                    </Grid>
                   <Grid item md={6}>
                        <PHtimePicker name='startTime' label='Start Date' />
                    </Grid>
                    <Grid item md={6}>
                        <PHtimePicker name='endTime' label='End Date' />
                    </Grid> 
                </Grid> 
                <Button type='submit' sx={{ mt: 1 }}>Create</Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduleModal;
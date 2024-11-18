"use client"
import { Box, Button, CircularProgress, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import { useDeleteDoctorMutation, useGetAllDoctorQuery } from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDebounced } from "@/redux/hooks";
import { toast } from "sonner";

const DoctorsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const query: Record<string, any> = {};
    const [searchTerm, setSearchTerm]= useState<string>("");
    // console.log(searchTerm)
    const debouncedTerm = useDebounced({
        searchQuery: searchTerm,
        delay: 600,
    })
    if (!!debouncedTerm) {
        query ["searchTerm"] = searchTerm;
    }

    const { data, isLoading } = useGetAllDoctorQuery({...query})
    const [deleteDoctor] = useDeleteDoctorMutation()
    // console.log(data)
    const doctors = data?.doctors;
    const meta = data?.meta;

    const handleDelete = async (id:string) => {
        try {
           const res = await deleteDoctor(id)
           console.log(res)
           if (res?.data?.id) {
            toast.success("doctor delete successfully")
           }
        } catch (err: any) {
            console.error(err?.message)
        }
    }

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'contactNumber', headerName: 'Contact Number', flex: 1 },
        {
            field: 'action',
            headerName: 'Action',
            flex: 1,
            headerAlign: "center",
            align: "center",
            renderCell: ({ row }) => {
                return (
                    <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
                        <DeleteIcon />
                    </IconButton>)
            }
        },
    ];
    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button onClick={() => setIsModalOpen(true)}>Create New Doctor</Button>
                <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
                <TextField
                onChange={(e)=>  setSearchTerm(e.target.value)}
                size="small" placeholder="search doctors" />
            </Stack>
            {!isLoading ? <Box my={2}>
                <DataGrid
                    rows={doctors}
                    columns={columns}
                    sx={{ border: 0 }}
                />
            </Box> : <CircularProgress />}
        </Box>
    );
};

export default DoctorsPage;